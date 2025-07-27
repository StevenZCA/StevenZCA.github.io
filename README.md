# FlashCard Learning App

A comprehensive flashcard application built with Python FastAPI backend and React frontend, designed to help people learn new knowledge in any domain using intelligent spaced repetition algorithms.

## 🌟 Features

### Core Functionality
- **Smart Flashcards**: Create and manage flashcard decks for any subject
- **Spaced Repetition**: Intelligent SM-2 algorithm for optimized learning
- **Multi-format Cards**: Support for text, images, and audio
- **Category Organization**: Organize decks by subjects and difficulty levels
- **Public/Private Decks**: Share decks or keep them private

### Learning & Analytics
- **Study Sessions**: Comprehensive study sessions with performance tracking
- **Progress Analytics**: Detailed learning analytics and insights
- **Performance Metrics**: Track accuracy, response times, and learning patterns
- **Study Streaks**: Motivation through daily study streak tracking
- **Data Export**: Export study data for external analysis

### Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Material-UI Components**: Beautiful, accessible interface
- **Real-time Feedback**: Instant visual feedback during study sessions
- **Dark/Light Theme**: Modern design with theme support

## 🏗️ Architecture

### Backend (Python FastAPI)
```
app/
├── main.py                 # FastAPI application entry point
├── database.py            # Database configuration
├── models.py              # SQLAlchemy ORM models
├── schemas.py             # Pydantic schemas
└── routers/
    ├── users.py           # Authentication & user management
    ├── decks.py           # Deck CRUD operations
    ├── cards.py           # Card management & spaced repetition
    ├── study_sessions.py  # Study session tracking
    └── analytics.py       # Analytics & insights
```

### Frontend (React)
```
frontend/src/
├── components/
│   ├── auth/              # Login & registration
│   ├── decks/             # Deck management
│   ├── study/             # Study interface
│   ├── analytics/         # Analytics dashboard
│   └── common/            # Reusable components
├── contexts/              # React contexts (Auth, etc.)
└── App.js                 # Main application component
```

### Database Schema
- **Scalable Design**: Optimized for both small and large datasets
- **Analytics Ready**: Structured for comprehensive data analysis
- **Indexed Tables**: Performance-optimized with strategic indexes
- **Spaced Repetition**: Built-in SM-2 algorithm fields

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

3. **Run the FastAPI server**:
   ```bash
   cd app
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

   The API will be available at `http://localhost:8000`
   API documentation at `http://localhost:8000/docs`

### Frontend Setup

1. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`

### Production Deployment

1. **Build the frontend**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Configure PostgreSQL** (recommended for production):
   ```bash
   # Update DATABASE_URL in .env
   DATABASE_URL=postgresql://username:password@localhost/flashcards_db
   ```

3. **Run with production server**:
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000
   ```

## 📊 Database Support

### Development
- **SQLite**: Default for easy setup and development
- **No configuration required**: Works out of the box

### Production
- **PostgreSQL**: Recommended for production deployments
- **Scalable**: Handles large datasets efficiently
- **Analytics**: Optimized for complex analytical queries

### Switching Databases
Simply update the `DATABASE_URL` in your `.env` file:
```bash
# SQLite (Development)
DATABASE_URL=sqlite:///./flashcards.db

# PostgreSQL (Production)
DATABASE_URL=postgresql://user:password@localhost/flashcards_db
```

## 🔐 Authentication & Security

- **JWT Tokens**: Secure authentication with JSON Web Tokens
- **Password Hashing**: Bcrypt for secure password storage
- **CORS Support**: Configurable cross-origin resource sharing
- **Input Validation**: Comprehensive request validation with Pydantic

## 📈 Analytics & Data Analysis

### Built-in Analytics
- **Learning Progress**: Track mastery levels and learning curves
- **Performance Metrics**: Accuracy, response times, difficulty analysis
- **Study Patterns**: Optimal study times and frequency analysis
- **Category Performance**: Subject-specific learning insights

### Data Export
- **JSON Format**: Structured data for analysis tools
- **Time-based Filtering**: Export data for specific date ranges
- **Comprehensive Fields**: All learning metrics included

### Integration Ready
The database schema is designed to integrate with:
- **Business Intelligence Tools**: Tableau, Power BI
- **Data Science Platforms**: Jupyter, R Studio
- **Machine Learning**: Scikit-learn, TensorFlow
- **Visualization**: Plotly, D3.js

## 🎯 Learning Algorithm

### SM-2 Spaced Repetition
- **Scientifically Proven**: Based on memory research
- **Adaptive Intervals**: Dynamic review scheduling
- **Ease Factor**: Cards adjust based on difficulty
- **Optimized Retention**: Maximizes long-term memory retention

### Card Scheduling
- **New Cards**: Introduced gradually
- **Review Cards**: Scheduled based on performance
- **Difficult Cards**: More frequent review
- **Mastered Cards**: Longer intervals between reviews

## 🛠️ Development

### API Documentation
- **Interactive Docs**: Available at `/docs`
- **OpenAPI Spec**: Full API specification
- **Request Examples**: Complete usage examples

### Testing
```bash
# Backend tests
cd app
pytest

# Frontend tests
cd frontend
npm test
```

### Code Quality
- **Type Hints**: Comprehensive Python type annotations
- **Validation**: Pydantic for data validation
- **Error Handling**: Robust error management
- **Logging**: Comprehensive application logging

## 📱 Mobile Support

- **Responsive Design**: Optimized for all screen sizes
- **Touch Gestures**: Intuitive mobile interactions
- **Progressive Web App**: PWA capabilities for mobile installation
- **Offline Support**: Basic offline functionality (future enhancement)

## 🔄 Scalability

### Small Datasets
- **SQLite**: Perfect for personal use
- **Fast Setup**: No database server required
- **Portable**: Single file database

### Large Datasets
- **PostgreSQL**: Enterprise-grade performance
- **Indexing**: Optimized database indexes
- **Connection Pooling**: Efficient database connections
- **Caching**: Redis integration ready

## 🎨 UI/UX Design

### Design Principles
- **Material Design**: Google's design language
- **Accessibility**: WCAG compliant components
- **Consistency**: Unified design system
- **Performance**: Optimized loading and interactions

### Customization
- **Theming**: Customizable color schemes
- **Typography**: Flexible font system
- **Components**: Reusable UI components
- **Responsive**: Mobile-first design approach

## 🚀 Future Enhancements

- **Collaborative Decks**: Share and collaborate on decks
- **Advanced Analytics**: Machine learning insights
- **Multimedia Support**: Video and interactive content
- **Social Features**: Study groups and competitions
- **Mobile Apps**: Native iOS and Android applications
- **Offline Sync**: Full offline functionality
- **AI-Powered**: Automatic card generation from content

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for learners everywhere**