from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy.orm import Session
from sqlalchemy import func
from datetime import datetime
from typing import List

from app.database import get_db
from app.models import StudySession, StudyRecord, User, Deck, Card
from app.schemas import StudySessionCreate, StudySessionResponse, StudyRecordCreate, StudyRecordResponse
from app.routers.users import get_current_user
from app.routers.cards import update_card_spaced_repetition

router = APIRouter()

@router.post("/session", response_model=StudySessionResponse)
async def start_study_session(
    session_data: StudySessionCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Start a new study session"""
    # Verify deck access
    deck = db.query(Deck).filter(Deck.id == session_data.deck_id).first()
    if not deck:
        raise HTTPException(status_code=404, detail="Deck not found")
    
    if deck.owner_id != current_user.id and not deck.is_public:
        raise HTTPException(status_code=403, detail="Access denied")
    
    # Create study session
    study_session = StudySession(
        user_id=current_user.id,
        deck_id=session_data.deck_id,
        session_type=session_data.session_type
    )
    
    db.add(study_session)
    db.commit()
    db.refresh(study_session)
    
    return study_session

@router.post("/session/{session_id}/record", response_model=StudyRecordResponse)
async def record_study_answer(
    session_id: int,
    record_data: StudyRecordCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Record a study answer within a session"""
    # Verify session ownership
    session = db.query(StudySession).filter(
        StudySession.id == session_id,
        StudySession.user_id == current_user.id
    ).first()
    
    if not session:
        raise HTTPException(status_code=404, detail="Study session not found")
    
    if session.ended_at:
        raise HTTPException(status_code=400, detail="Study session already ended")
    
    # Verify card belongs to session deck
    card = db.query(Card).filter(
        Card.id == record_data.card_id,
        Card.deck_id == session.deck_id
    ).first()
    
    if not card:
        raise HTTPException(status_code=404, detail="Card not found in session deck")
    
    # Create study record
    study_record = StudyRecord(
        session_id=session_id,
        card_id=record_data.card_id,
        was_correct=record_data.was_correct,
        difficulty_rating=record_data.difficulty_rating,
        response_time_ms=record_data.response_time_ms
    )
    
    db.add(study_record)
    
    # Update session stats
    session.cards_studied += 1
    if record_data.was_correct:
        session.cards_correct += 1
    
    # Update card's spaced repetition
    update_card_spaced_repetition(card, record_data.difficulty_rating)
    
    db.commit()
    db.refresh(study_record)
    
    return study_record

@router.put("/session/{session_id}/end")
async def end_study_session(
    session_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """End a study session"""
    session = db.query(StudySession).filter(
        StudySession.id == session_id,
        StudySession.user_id == current_user.id
    ).first()
    
    if not session:
        raise HTTPException(status_code=404, detail="Study session not found")
    
    if session.ended_at:
        raise HTTPException(status_code=400, detail="Study session already ended")
    
    # Calculate duration
    session.ended_at = datetime.utcnow()
    duration = session.ended_at - session.started_at
    session.duration_seconds = int(duration.total_seconds())
    
    db.commit()
    db.refresh(session)
    
    return {
        "message": "Study session ended",
        "duration_seconds": session.duration_seconds,
        "cards_studied": session.cards_studied,
        "cards_correct": session.cards_correct,
        "accuracy": session.cards_correct / session.cards_studied if session.cards_studied > 0 else 0
    }

@router.get("/sessions", response_model=List[StudySessionResponse])
async def get_user_study_sessions(
    skip: int = 0,
    limit: int = 50,
    deck_id: int = None,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get user's study sessions"""
    query = db.query(StudySession).filter(StudySession.user_id == current_user.id)
    
    if deck_id:
        query = query.filter(StudySession.deck_id == deck_id)
    
    sessions = query.order_by(StudySession.started_at.desc()).offset(skip).limit(limit).all()
    return sessions

@router.get("/session/{session_id}", response_model=StudySessionResponse)
async def get_study_session(
    session_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get a specific study session"""
    session = db.query(StudySession).filter(
        StudySession.id == session_id,
        StudySession.user_id == current_user.id
    ).first()
    
    if not session:
        raise HTTPException(status_code=404, detail="Study session not found")
    
    return session

@router.get("/session/{session_id}/records", response_model=List[StudyRecordResponse])
async def get_session_records(
    session_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get all study records for a session"""
    # Verify session ownership
    session = db.query(StudySession).filter(
        StudySession.id == session_id,
        StudySession.user_id == current_user.id
    ).first()
    
    if not session:
        raise HTTPException(status_code=404, detail="Study session not found")
    
    records = db.query(StudyRecord).filter(StudyRecord.session_id == session_id).order_by(StudyRecord.timestamp).all()
    return records

@router.get("/stats/daily")
async def get_daily_study_stats(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get daily study statistics"""
    today = datetime.utcnow().date()
    
    # Today's sessions
    today_sessions = db.query(StudySession).filter(
        StudySession.user_id == current_user.id,
        func.date(StudySession.started_at) == today
    ).all()
    
    total_cards_today = sum(session.cards_studied for session in today_sessions)
    total_correct_today = sum(session.cards_correct for session in today_sessions)
    total_time_today = sum(session.duration_seconds or 0 for session in today_sessions)
    
    # Cards due today
    cards_due_today = db.query(func.count(Card.id)).join(Deck).filter(
        Deck.owner_id == current_user.id,
        Card.next_review <= datetime.utcnow()
    ).scalar()
    
    return {
        "date": today,
        "cards_studied": total_cards_today,
        "cards_correct": total_correct_today,
        "accuracy": total_correct_today / total_cards_today if total_cards_today > 0 else 0,
        "study_time_seconds": total_time_today,
        "cards_due": cards_due_today,
        "sessions_completed": len([s for s in today_sessions if s.ended_at])
    }

@router.get("/stats/streak")
async def get_study_streak(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Calculate user's study streak"""
    # Get dates with study activity
    study_dates = db.query(func.date(StudySession.started_at)).filter(
        StudySession.user_id == current_user.id,
        StudySession.cards_studied > 0
    ).distinct().order_by(func.date(StudySession.started_at).desc()).all()
    
    if not study_dates:
        return {"current_streak": 0, "longest_streak": 0}
    
    dates = [date[0] for date in study_dates]
    current_streak = 0
    longest_streak = 0
    temp_streak = 1
    
    # Calculate current streak
    today = datetime.utcnow().date()
    if dates and dates[0] == today:
        current_streak = 1
        for i in range(1, len(dates)):
            if (dates[i-1] - dates[i]).days == 1:
                current_streak += 1
            else:
                break
    elif dates and (today - dates[0]).days == 1:
        current_streak = 1
        for i in range(1, len(dates)):
            if (dates[i-1] - dates[i]).days == 1:
                current_streak += 1
            else:
                break
    
    # Calculate longest streak
    for i in range(1, len(dates)):
        if (dates[i-1] - dates[i]).days == 1:
            temp_streak += 1
            longest_streak = max(longest_streak, temp_streak)
        else:
            temp_streak = 1
    
    longest_streak = max(longest_streak, temp_streak)
    
    return {
        "current_streak": current_streak,
        "longest_streak": longest_streak
    }