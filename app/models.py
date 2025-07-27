from sqlalchemy import Column, Integer, String, Text, DateTime, Float, Boolean, ForeignKey, Index
from sqlalchemy.relationship import relationship
from sqlalchemy.sql import func
from app.database import Base
import uuid
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import String as SQLString

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(100), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    is_active = Column(Boolean, default=True)
    
    # Relationships
    decks = relationship("Deck", back_populates="owner", cascade="all, delete-orphan")
    study_sessions = relationship("StudySession", back_populates="user", cascade="all, delete-orphan")

class Deck(Base):
    __tablename__ = "decks"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False, index=True)
    description = Column(Text)
    category = Column(String(100), index=True)
    difficulty_level = Column(String(20), default="beginner")  # beginner, intermediate, advanced
    is_public = Column(Boolean, default=False)
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    owner = relationship("User", back_populates="decks")
    cards = relationship("Card", back_populates="deck", cascade="all, delete-orphan")
    study_sessions = relationship("StudySession", back_populates="deck", cascade="all, delete-orphan")
    
    # Indexes for performance
    __table_args__ = (
        Index('idx_deck_owner_category', 'owner_id', 'category'),
        Index('idx_deck_public_category', 'is_public', 'category'),
    )

class Card(Base):
    __tablename__ = "cards"
    
    id = Column(Integer, primary_key=True, index=True)
    front_content = Column(Text, nullable=False)
    back_content = Column(Text, nullable=False)
    hint = Column(Text)
    image_url = Column(String(500))
    audio_url = Column(String(500))
    card_type = Column(String(50), default="basic")  # basic, cloze, multiple_choice
    difficulty = Column(Integer, default=1)  # 1-5 scale
    deck_id = Column(Integer, ForeignKey("decks.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Spaced repetition fields
    ease_factor = Column(Float, default=2.5)
    interval_days = Column(Integer, default=1)
    repetitions = Column(Integer, default=0)
    next_review = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    deck = relationship("Deck", back_populates="cards")
    study_records = relationship("StudyRecord", back_populates="card", cascade="all, delete-orphan")
    
    # Indexes for performance
    __table_args__ = (
        Index('idx_card_deck_next_review', 'deck_id', 'next_review'),
        Index('idx_card_difficulty', 'difficulty'),
    )

class StudySession(Base):
    __tablename__ = "study_sessions"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    deck_id = Column(Integer, ForeignKey("decks.id"), nullable=False)
    started_at = Column(DateTime(timezone=True), server_default=func.now())
    ended_at = Column(DateTime(timezone=True))
    duration_seconds = Column(Integer)
    cards_studied = Column(Integer, default=0)
    cards_correct = Column(Integer, default=0)
    session_type = Column(String(50), default="review")  # review, learn, test
    
    # Relationships
    user = relationship("User", back_populates="study_sessions")
    deck = relationship("Deck", back_populates="study_sessions")
    study_records = relationship("StudyRecord", back_populates="session", cascade="all, delete-orphan")
    
    # Indexes for analytics
    __table_args__ = (
        Index('idx_session_user_date', 'user_id', 'started_at'),
        Index('idx_session_deck_date', 'deck_id', 'started_at'),
    )

class StudyRecord(Base):
    __tablename__ = "study_records"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("study_sessions.id"), nullable=False)
    card_id = Column(Integer, ForeignKey("cards.id"), nullable=False)
    response_time_ms = Column(Integer)
    was_correct = Column(Boolean, nullable=False)
    difficulty_rating = Column(Integer)  # 1-4 (again, hard, good, easy)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    session = relationship("StudySession", back_populates="study_records")
    card = relationship("Card", back_populates="study_records")
    
    # Indexes for analytics
    __table_args__ = (
        Index('idx_record_card_timestamp', 'card_id', 'timestamp'),
        Index('idx_record_session_timestamp', 'session_id', 'timestamp'),
        Index('idx_record_correct_timestamp', 'was_correct', 'timestamp'),
    )

class Analytics(Base):
    __tablename__ = "analytics"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    date = Column(DateTime(timezone=True), server_default=func.now())
    metric_type = Column(String(50), nullable=False)  # daily_cards, weekly_accuracy, etc.
    metric_value = Column(Float, nullable=False)
    metadata = Column(Text)  # JSON string for additional data
    
    # Indexes for fast analytics queries
    __table_args__ = (
        Index('idx_analytics_user_type_date', 'user_id', 'metric_type', 'date'),
        Index('idx_analytics_type_date', 'metric_type', 'date'),
    )