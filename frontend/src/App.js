import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAuth } from './contexts/AuthContext';

// Components
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import DeckList from './components/decks/DeckList';
import DeckDetail from './components/decks/DeckDetail';
import StudySession from './components/study/StudySession';
import Analytics from './components/analytics/Analytics';
import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {user && <Navbar />}
      
      <Box component="main" sx={{ flexGrow: 1, pt: user ? 8 : 0 }}>
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/login" 
            element={!user ? <Login /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/register" 
            element={!user ? <Register /> : <Navigate to="/dashboard" />} 
          />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/decks" 
            element={user ? <DeckList /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/decks/:id" 
            element={user ? <DeckDetail /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/study/:deckId" 
            element={user ? <StudySession /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/analytics" 
            element={user ? <Analytics /> : <Navigate to="/login" />} 
          />
          
          {/* Default redirect */}
          <Route 
            path="/" 
            element={<Navigate to={user ? "/dashboard" : "/login"} />} 
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;