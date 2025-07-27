from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List, Optional

from app.database import get_db
from app.models import Deck, User, Card
from app.schemas import DeckCreate, DeckUpdate, DeckResponse
from app.routers.users import get_current_user

router = APIRouter()

@router.post("/", response_model=DeckResponse)
async def create_deck(
    deck: DeckCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    db_deck = Deck(**deck.dict(), owner_id=current_user.id)
    db.add(db_deck)
    db.commit()
    db.refresh(db_deck)
    
    # Add card count
    db_deck.card_count = 0
    return db_deck

@router.get("/", response_model=List[DeckResponse])
async def get_user_decks(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    category: Optional[str] = Query(None),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    query = db.query(Deck).filter(Deck.owner_id == current_user.id)
    
    if category:
        query = query.filter(Deck.category == category)
    
    decks = query.offset(skip).limit(limit).all()
    
    # Add card counts
    for deck in decks:
        card_count = db.query(func.count(Card.id)).filter(Card.deck_id == deck.id).scalar()
        deck.card_count = card_count
    
    return decks

@router.get("/public", response_model=List[DeckResponse])
async def get_public_decks(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    category: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    query = db.query(Deck).filter(Deck.is_public == True)
    
    if category:
        query = query.filter(Deck.category == category)
    
    decks = query.offset(skip).limit(limit).all()
    
    # Add card counts
    for deck in decks:
        card_count = db.query(func.count(Card.id)).filter(Card.deck_id == deck.id).scalar()
        deck.card_count = card_count
    
    return decks

@router.get("/{deck_id}", response_model=DeckResponse)
async def get_deck(
    deck_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    deck = db.query(Deck).filter(Deck.id == deck_id).first()
    
    if not deck:
        raise HTTPException(status_code=404, detail="Deck not found")
    
    # Check if user has access (owner or public deck)
    if deck.owner_id != current_user.id and not deck.is_public:
        raise HTTPException(status_code=403, detail="Access denied")
    
    # Add card count
    card_count = db.query(func.count(Card.id)).filter(Card.deck_id == deck.id).scalar()
    deck.card_count = card_count
    
    return deck

@router.put("/{deck_id}", response_model=DeckResponse)
async def update_deck(
    deck_id: int,
    deck_update: DeckUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    deck = db.query(Deck).filter(Deck.id == deck_id, Deck.owner_id == current_user.id).first()
    
    if not deck:
        raise HTTPException(status_code=404, detail="Deck not found")
    
    # Update only provided fields
    update_data = deck_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(deck, field, value)
    
    db.commit()
    db.refresh(deck)
    
    # Add card count
    card_count = db.query(func.count(Card.id)).filter(Card.deck_id == deck.id).scalar()
    deck.card_count = card_count
    
    return deck

@router.delete("/{deck_id}")
async def delete_deck(
    deck_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    deck = db.query(Deck).filter(Deck.id == deck_id, Deck.owner_id == current_user.id).first()
    
    if not deck:
        raise HTTPException(status_code=404, detail="Deck not found")
    
    db.delete(deck)
    db.commit()
    
    return {"message": "Deck deleted successfully"}

@router.get("/categories/list")
async def get_categories(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Get unique categories from user's decks and public decks
    user_categories = db.query(Deck.category).filter(
        Deck.owner_id == current_user.id,
        Deck.category.isnot(None)
    ).distinct().all()
    
    public_categories = db.query(Deck.category).filter(
        Deck.is_public == True,
        Deck.category.isnot(None)
    ).distinct().all()
    
    categories = set()
    for cat, in user_categories + public_categories:
        if cat:
            categories.add(cat)
    
    return {"categories": sorted(list(categories))}