from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional, List
from enum import Enum

# Enums
class DifficultyLevel(str, Enum):
    beginner = "beginner"
    intermediate = "intermediate"
    advanced = "advanced"

class CardType(str, Enum):
    basic = "basic"
    cloze = "cloze"
    multiple_choice = "multiple_choice"

class SessionType(str, Enum):
    review = "review"
    learn = "learn"
    test = "test"

# User Schemas
class UserBase(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr

class UserCreate(UserBase):
    password: str = Field(..., min_length=6)

class UserResponse(UserBase):
    id: int
    created_at: datetime
    is_active: bool
    
    class Config:
        from_attributes = True

# Deck Schemas
class DeckBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    description: Optional[str] = None
    category: Optional[str] = None
    difficulty_level: DifficultyLevel = DifficultyLevel.beginner
    is_public: bool = False

class DeckCreate(DeckBase):
    pass

class DeckUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    category: Optional[str] = None
    difficulty_level: Optional[DifficultyLevel] = None
    is_public: Optional[bool] = None

class DeckResponse(DeckBase):
    id: int
    owner_id: int
    created_at: datetime
    updated_at: Optional[datetime]
    card_count: Optional[int] = 0
    
    class Config:
        from_attributes = True

# Card Schemas
class CardBase(BaseModel):
    front_content: str = Field(..., min_length=1)
    back_content: str = Field(..., min_length=1)
    hint: Optional[str] = None
    image_url: Optional[str] = None
    audio_url: Optional[str] = None
    card_type: CardType = CardType.basic
    difficulty: int = Field(default=1, ge=1, le=5)

class CardCreate(CardBase):
    deck_id: int

class CardUpdate(BaseModel):
    front_content: Optional[str] = None
    back_content: Optional[str] = None
    hint: Optional[str] = None
    image_url: Optional[str] = None
    audio_url: Optional[str] = None
    card_type: Optional[CardType] = None
    difficulty: Optional[int] = Field(None, ge=1, le=5)

class CardResponse(CardBase):
    id: int
    deck_id: int
    created_at: datetime
    updated_at: Optional[datetime]
    ease_factor: float
    interval_days: int
    repetitions: int
    next_review: datetime
    
    class Config:
        from_attributes = True

# Study Session Schemas
class StudySessionCreate(BaseModel):
    deck_id: int
    session_type: SessionType = SessionType.review

class StudySessionResponse(BaseModel):
    id: int
    user_id: int
    deck_id: int
    started_at: datetime
    ended_at: Optional[datetime]
    duration_seconds: Optional[int]
    cards_studied: int
    cards_correct: int
    session_type: SessionType
    
    class Config:
        from_attributes = True

# Study Record Schemas
class StudyRecordCreate(BaseModel):
    card_id: int
    was_correct: bool
    difficulty_rating: int = Field(..., ge=1, le=4)
    response_time_ms: Optional[int] = None

class StudyRecordResponse(BaseModel):
    id: int
    session_id: int
    card_id: int
    response_time_ms: Optional[int]
    was_correct: bool
    difficulty_rating: int
    timestamp: datetime
    
    class Config:
        from_attributes = True

# Analytics Schemas
class AnalyticsResponse(BaseModel):
    metric_type: str
    metric_value: float
    date: datetime
    metadata: Optional[str] = None
    
    class Config:
        from_attributes = True

class StudyStatsResponse(BaseModel):
    total_cards_studied: int
    total_correct: int
    accuracy_percentage: float
    average_response_time: Optional[float]
    study_streak_days: int
    cards_due_today: int
    cards_due_tomorrow: int
    
class DeckStatsResponse(BaseModel):
    deck_id: int
    deck_title: str
    total_cards: int
    cards_mastered: int
    cards_learning: int
    cards_new: int
    average_accuracy: float
    last_studied: Optional[datetime]