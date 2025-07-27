from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import and_, func
from typing import List
from datetime import datetime, timedelta
import math

from app.database import get_db
from app.models import Card, Deck, User
from app.schemas import CardCreate, CardUpdate, CardResponse
from app.routers.users import get_current_user

router = APIRouter()

def update_card_spaced_repetition(card: Card, difficulty_rating: int):
    """
    Update card's spaced repetition parameters based on SM-2 algorithm
    difficulty_rating: 1=again, 2=hard, 3=good, 4=easy
    """
    if difficulty_rating < 3:  # again or hard
        card.repetitions = 0
        card.interval_days = 1
    else:  # good or easy
        if card.repetitions == 0:
            card.interval_days = 1
        elif card.repetitions == 1:
            card.interval_days = 6
        else:
            card.interval_days = math.ceil(card.interval_days * card.ease_factor)
        
        card.repetitions += 1
    
    # Update ease factor
    card.ease_factor = card.ease_factor + (0.1 - (5 - difficulty_rating) * (0.08 + (5 - difficulty_rating) * 0.02))
    if card.ease_factor < 1.3:
        card.ease_factor = 1.3
    
    # Set next review date
    card.next_review = datetime.utcnow() + timedelta(days=card.interval_days)

@router.post("/", response_model=CardResponse)
async def create_card(
    card: CardCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Verify deck ownership
    deck = db.query(Deck).filter(Deck.id == card.deck_id, Deck.owner_id == current_user.id).first()
    if not deck:
        raise HTTPException(status_code=404, detail="Deck not found or access denied")
    
    db_card = Card(**card.dict())
    db.add(db_card)
    db.commit()
    db.refresh(db_card)
    
    return db_card

@router.get("/deck/{deck_id}", response_model=List[CardResponse])
async def get_deck_cards(
    deck_id: int,
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Verify deck access
    deck = db.query(Deck).filter(Deck.id == deck_id).first()
    if not deck:
        raise HTTPException(status_code=404, detail="Deck not found")
    
    if deck.owner_id != current_user.id and not deck.is_public:
        raise HTTPException(status_code=403, detail="Access denied")
    
    cards = db.query(Card).filter(Card.deck_id == deck_id).offset(skip).limit(limit).all()
    return cards

@router.get("/due", response_model=List[CardResponse])
async def get_due_cards(
    deck_id: int = Query(None),
    limit: int = Query(20, ge=1, le=100),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get cards that are due for review"""
    query = db.query(Card).join(Deck).filter(
        Deck.owner_id == current_user.id,
        Card.next_review <= datetime.utcnow()
    )
    
    if deck_id:
        query = query.filter(Card.deck_id == deck_id)
    
    cards = query.order_by(Card.next_review).limit(limit).all()
    return cards

@router.get("/new", response_model=List[CardResponse])
async def get_new_cards(
    deck_id: int = Query(None),
    limit: int = Query(20, ge=1, le=100),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get cards that haven't been studied yet"""
    query = db.query(Card).join(Deck).filter(
        Deck.owner_id == current_user.id,
        Card.repetitions == 0,
        Card.next_review <= datetime.utcnow()
    )
    
    if deck_id:
        query = query.filter(Card.deck_id == deck_id)
    
    cards = query.order_by(Card.created_at).limit(limit).all()
    return cards

@router.get("/{card_id}", response_model=CardResponse)
async def get_card(
    card_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    card = db.query(Card).join(Deck).filter(
        Card.id == card_id,
        and_(
            Deck.owner_id == current_user.id,
            Deck.is_public == True
        ).self_group()
    ).first()
    
    if not card:
        raise HTTPException(status_code=404, detail="Card not found or access denied")
    
    return card

@router.put("/{card_id}", response_model=CardResponse)
async def update_card(
    card_id: int,
    card_update: CardUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    card = db.query(Card).join(Deck).filter(
        Card.id == card_id,
        Deck.owner_id == current_user.id
    ).first()
    
    if not card:
        raise HTTPException(status_code=404, detail="Card not found or access denied")
    
    # Update only provided fields
    update_data = card_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(card, field, value)
    
    db.commit()
    db.refresh(card)
    
    return card

@router.delete("/{card_id}")
async def delete_card(
    card_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    card = db.query(Card).join(Deck).filter(
        Card.id == card_id,
        Deck.owner_id == current_user.id
    ).first()
    
    if not card:
        raise HTTPException(status_code=404, detail="Card not found or access denied")
    
    db.delete(card)
    db.commit()
    
    return {"message": "Card deleted successfully"}

@router.post("/{card_id}/review")
async def review_card(
    card_id: int,
    difficulty_rating: int = Query(..., ge=1, le=4, description="1=again, 2=hard, 3=good, 4=easy"),
    response_time_ms: int = Query(None, ge=0),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Record a card review and update spaced repetition parameters"""
    card = db.query(Card).join(Deck).filter(
        Card.id == card_id,
        Deck.owner_id == current_user.id
    ).first()
    
    if not card:
        raise HTTPException(status_code=404, detail="Card not found or access denied")
    
    # Update spaced repetition
    update_card_spaced_repetition(card, difficulty_rating)
    
    db.commit()
    db.refresh(card)
    
    return {
        "message": "Card reviewed successfully",
        "next_review": card.next_review,
        "interval_days": card.interval_days,
        "ease_factor": card.ease_factor
    }

@router.get("/deck/{deck_id}/stats")
async def get_deck_card_stats(
    deck_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get statistics about cards in a deck"""
    # Verify deck access
    deck = db.query(Deck).filter(Deck.id == deck_id).first()
    if not deck:
        raise HTTPException(status_code=404, detail="Deck not found")
    
    if deck.owner_id != current_user.id and not deck.is_public:
        raise HTTPException(status_code=403, detail="Access denied")
    
    total_cards = db.query(func.count(Card.id)).filter(Card.deck_id == deck_id).scalar()
    
    new_cards = db.query(func.count(Card.id)).filter(
        Card.deck_id == deck_id,
        Card.repetitions == 0
    ).scalar()
    
    due_cards = db.query(func.count(Card.id)).filter(
        Card.deck_id == deck_id,
        Card.next_review <= datetime.utcnow()
    ).scalar()
    
    learning_cards = db.query(func.count(Card.id)).filter(
        Card.deck_id == deck_id,
        Card.repetitions > 0,
        Card.repetitions < 3
    ).scalar()
    
    mastered_cards = db.query(func.count(Card.id)).filter(
        Card.deck_id == deck_id,
        Card.repetitions >= 3,
        Card.ease_factor >= 2.5
    ).scalar()
    
    return {
        "total_cards": total_cards,
        "new_cards": new_cards,
        "due_cards": due_cards,
        "learning_cards": learning_cards,
        "mastered_cards": mastered_cards
    }