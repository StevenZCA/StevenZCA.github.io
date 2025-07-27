from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import func, and_, extract
from datetime import datetime, timedelta
from typing import List, Dict, Any
import json

from app.database import get_db
from app.models import StudySession, StudyRecord, User, Deck, Card, Analytics
from app.schemas import AnalyticsResponse, StudyStatsResponse, DeckStatsResponse
from app.routers.users import get_current_user

router = APIRouter()

@router.get("/dashboard")
async def get_dashboard_analytics(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get comprehensive dashboard analytics"""
    
    # Overall stats
    total_decks = db.query(func.count(Deck.id)).filter(Deck.owner_id == current_user.id).scalar()
    total_cards = db.query(func.count(Card.id)).join(Deck).filter(Deck.owner_id == current_user.id).scalar()
    
    # Study sessions stats
    total_sessions = db.query(func.count(StudySession.id)).filter(StudySession.user_id == current_user.id).scalar()
    total_study_time = db.query(func.sum(StudySession.duration_seconds)).filter(StudySession.user_id == current_user.id).scalar() or 0
    
    # Card mastery stats
    mastered_cards = db.query(func.count(Card.id)).join(Deck).filter(
        Deck.owner_id == current_user.id,
        Card.repetitions >= 3,
        Card.ease_factor >= 2.5
    ).scalar()
    
    learning_cards = db.query(func.count(Card.id)).join(Deck).filter(
        Deck.owner_id == current_user.id,
        Card.repetitions > 0,
        Card.repetitions < 3
    ).scalar()
    
    new_cards = db.query(func.count(Card.id)).join(Deck).filter(
        Deck.owner_id == current_user.id,
        Card.repetitions == 0
    ).scalar()
    
    # Due cards
    cards_due_today = db.query(func.count(Card.id)).join(Deck).filter(
        Deck.owner_id == current_user.id,
        Card.next_review <= datetime.utcnow()
    ).scalar()
    
    # Recent performance (last 7 days)
    week_ago = datetime.utcnow() - timedelta(days=7)
    recent_sessions = db.query(StudySession).filter(
        StudySession.user_id == current_user.id,
        StudySession.started_at >= week_ago
    ).all()
    
    recent_cards_studied = sum(session.cards_studied for session in recent_sessions)
    recent_cards_correct = sum(session.cards_correct for session in recent_sessions)
    recent_accuracy = recent_cards_correct / recent_cards_studied if recent_cards_studied > 0 else 0
    
    return {
        "overview": {
            "total_decks": total_decks,
            "total_cards": total_cards,
            "total_sessions": total_sessions,
            "total_study_time_minutes": total_study_time // 60,
        },
        "card_mastery": {
            "mastered": mastered_cards,
            "learning": learning_cards,
            "new": new_cards,
            "due_today": cards_due_today,
        },
        "recent_performance": {
            "cards_studied_week": recent_cards_studied,
            "accuracy_week": round(recent_accuracy * 100, 1),
        }
    }

@router.get("/performance/weekly")
async def get_weekly_performance(
    weeks: int = Query(4, ge=1, le=52),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get weekly performance data"""
    
    end_date = datetime.utcnow()
    start_date = end_date - timedelta(weeks=weeks)
    
    weekly_stats = []
    
    for week in range(weeks):
        week_start = start_date + timedelta(weeks=week)
        week_end = week_start + timedelta(days=7)
        
        sessions = db.query(StudySession).filter(
            StudySession.user_id == current_user.id,
            StudySession.started_at >= week_start,
            StudySession.started_at < week_end
        ).all()
        
        cards_studied = sum(session.cards_studied for session in sessions)
        cards_correct = sum(session.cards_correct for session in sessions)
        study_time = sum(session.duration_seconds or 0 for session in sessions)
        
        weekly_stats.append({
            "week_start": week_start.date(),
            "cards_studied": cards_studied,
            "accuracy": cards_correct / cards_studied if cards_studied > 0 else 0,
            "study_time_minutes": study_time // 60,
            "sessions": len(sessions)
        })
    
    return {"weekly_performance": weekly_stats}

@router.get("/performance/category")
async def get_category_performance(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get performance by category"""
    
    # Get categories and their performance
    category_stats = db.query(
        Deck.category,
        func.count(StudyRecord.id).label('total_records'),
        func.sum(func.cast(StudyRecord.was_correct, db.Integer)).label('correct_records'),
        func.avg(StudyRecord.response_time_ms).label('avg_response_time')
    ).join(Card, Card.deck_id == Deck.id)\
     .join(StudyRecord, StudyRecord.card_id == Card.id)\
     .join(StudySession, StudySession.id == StudyRecord.session_id)\
     .filter(StudySession.user_id == current_user.id)\
     .filter(Deck.category.isnot(None))\
     .group_by(Deck.category)\
     .all()
    
    result = []
    for category, total, correct, avg_time in category_stats:
        accuracy = correct / total if total > 0 else 0
        result.append({
            "category": category,
            "total_reviews": total,
            "accuracy": round(accuracy, 3),
            "avg_response_time_ms": round(avg_time, 2) if avg_time else None
        })
    
    return {"category_performance": result}

@router.get("/decks/stats", response_model=List[DeckStatsResponse])
async def get_deck_statistics(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get detailed statistics for each deck"""
    
    decks = db.query(Deck).filter(Deck.owner_id == current_user.id).all()
    deck_stats = []
    
    for deck in decks:
        # Card counts
        total_cards = db.query(func.count(Card.id)).filter(Card.deck_id == deck.id).scalar()
        
        mastered_cards = db.query(func.count(Card.id)).filter(
            Card.deck_id == deck.id,
            Card.repetitions >= 3,
            Card.ease_factor >= 2.5
        ).scalar()
        
        learning_cards = db.query(func.count(Card.id)).filter(
            Card.deck_id == deck.id,
            Card.repetitions > 0,
            Card.repetitions < 3
        ).scalar()
        
        new_cards = db.query(func.count(Card.id)).filter(
            Card.deck_id == deck.id,
            Card.repetitions == 0
        ).scalar()
        
        # Performance stats
        accuracy_data = db.query(
            func.count(StudyRecord.id).label('total'),
            func.sum(func.cast(StudyRecord.was_correct, db.Integer)).label('correct')
        ).join(Card, Card.id == StudyRecord.card_id)\
         .join(StudySession, StudySession.id == StudyRecord.session_id)\
         .filter(Card.deck_id == deck.id, StudySession.user_id == current_user.id)\
         .first()
        
        total_reviews = accuracy_data.total or 0
        correct_reviews = accuracy_data.correct or 0
        average_accuracy = correct_reviews / total_reviews if total_reviews > 0 else 0
        
        # Last studied
        last_session = db.query(StudySession.started_at).filter(
            StudySession.user_id == current_user.id,
            StudySession.deck_id == deck.id
        ).order_by(StudySession.started_at.desc()).first()
        
        deck_stats.append(DeckStatsResponse(
            deck_id=deck.id,
            deck_title=deck.title,
            total_cards=total_cards,
            cards_mastered=mastered_cards,
            cards_learning=learning_cards,
            cards_new=new_cards,
            average_accuracy=round(average_accuracy, 3),
            last_studied=last_session.started_at if last_session else None
        ))
    
    return deck_stats

@router.get("/learning/difficulty")
async def get_difficulty_analysis(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Analyze performance by difficulty level"""
    
    difficulty_stats = db.query(
        Card.difficulty,
        func.count(StudyRecord.id).label('total_reviews'),
        func.sum(func.cast(StudyRecord.was_correct, db.Integer)).label('correct_reviews'),
        func.avg(StudyRecord.response_time_ms).label('avg_response_time')
    ).join(StudyRecord, StudyRecord.card_id == Card.id)\
     .join(StudySession, StudySession.id == StudyRecord.session_id)\
     .join(Deck, Deck.id == Card.deck_id)\
     .filter(StudySession.user_id == current_user.id)\
     .group_by(Card.difficulty)\
     .all()
    
    result = []
    for difficulty, total, correct, avg_time in difficulty_stats:
        accuracy = correct / total if total > 0 else 0
        result.append({
            "difficulty_level": difficulty,
            "total_reviews": total,
            "accuracy": round(accuracy, 3),
            "avg_response_time_ms": round(avg_time, 2) if avg_time else None
        })
    
    return {"difficulty_analysis": result}

@router.get("/learning/patterns")
async def get_learning_patterns(
    days: int = Query(30, ge=7, le=365),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Analyze learning patterns and optimal study times"""
    
    end_date = datetime.utcnow()
    start_date = end_date - timedelta(days=days)
    
    # Hour of day analysis
    hourly_stats = db.query(
        extract('hour', StudySession.started_at).label('hour'),
        func.count(StudySession.id).label('session_count'),
        func.avg(StudySession.cards_correct * 1.0 / StudySession.cards_studied).label('avg_accuracy')
    ).filter(
        StudySession.user_id == current_user.id,
        StudySession.started_at >= start_date,
        StudySession.cards_studied > 0
    ).group_by(extract('hour', StudySession.started_at)).all()
    
    # Day of week analysis
    daily_stats = db.query(
        extract('dow', StudySession.started_at).label('day_of_week'),
        func.count(StudySession.id).label('session_count'),
        func.avg(StudySession.cards_correct * 1.0 / StudySession.cards_studied).label('avg_accuracy')
    ).filter(
        StudySession.user_id == current_user.id,
        StudySession.started_at >= start_date,
        StudySession.cards_studied > 0
    ).group_by(extract('dow', StudySession.started_at)).all()
    
    return {
        "hourly_patterns": [
            {
                "hour": int(hour),
                "session_count": session_count,
                "avg_accuracy": round(float(avg_accuracy or 0), 3)
            }
            for hour, session_count, avg_accuracy in hourly_stats
        ],
        "daily_patterns": [
            {
                "day_of_week": int(day),
                "session_count": session_count,
                "avg_accuracy": round(float(avg_accuracy or 0), 3)
            }
            for day, session_count, avg_accuracy in daily_stats
        ]
    }

@router.post("/export")
async def export_study_data(
    format: str = Query("json", regex="^(json|csv)$"),
    days: int = Query(30, ge=1, le=365),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Export study data for external analysis"""
    
    end_date = datetime.utcnow()
    start_date = end_date - timedelta(days=days)
    
    # Get comprehensive study data
    study_data = db.query(
        StudySession.started_at,
        StudySession.ended_at,
        StudySession.duration_seconds,
        StudySession.session_type,
        StudyRecord.was_correct,
        StudyRecord.difficulty_rating,
        StudyRecord.response_time_ms,
        Card.difficulty,
        Card.ease_factor,
        Card.repetitions,
        Deck.title.label('deck_title'),
        Deck.category
    ).join(StudyRecord, StudyRecord.session_id == StudySession.id)\
     .join(Card, Card.id == StudyRecord.card_id)\
     .join(Deck, Deck.id == Card.deck_id)\
     .filter(
        StudySession.user_id == current_user.id,
        StudySession.started_at >= start_date
    ).all()
    
    if format == "json":
        export_data = []
        for row in study_data:
            export_data.append({
                "session_started": row.started_at.isoformat(),
                "session_ended": row.ended_at.isoformat() if row.ended_at else None,
                "session_duration_seconds": row.duration_seconds,
                "session_type": row.session_type,
                "was_correct": row.was_correct,
                "difficulty_rating": row.difficulty_rating,
                "response_time_ms": row.response_time_ms,
                "card_difficulty": row.difficulty,
                "card_ease_factor": row.ease_factor,
                "card_repetitions": row.repetitions,
                "deck_title": row.deck_title,
                "deck_category": row.category
            })
        
        return {
            "format": "json",
            "data": export_data,
            "total_records": len(export_data),
            "date_range": {
                "start": start_date.isoformat(),
                "end": end_date.isoformat()
            }
        }
    
    # For CSV format, return structured data that can be easily converted
    return {
        "format": "csv",
        "message": "CSV export functionality would be implemented here",
        "total_records": len(study_data)
    }