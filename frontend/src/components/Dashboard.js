import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  LinearProgress,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Style,
  TrendingUp,
  School,
  Timer,
  PlayArrow,
  Add,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from './common/LoadingSpinner';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState(null);
  const [recentDecks, setRecentDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [analyticsRes, decksRes] = await Promise.all([
        axios.get('/api/analytics/dashboard'),
        axios.get('/api/decks?limit=5'),
      ]);
      
      setAnalytics(analyticsRes.data);
      setRecentDecks(decksRes.data);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading dashboard..." />;
  }

  const StatCard = ({ title, value, icon, color = 'primary' }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography color="text.secondary" gutterBottom variant="overline">
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>
              {value}
            </Typography>
          </Box>
          <Avatar sx={{ bgcolor: `${color}.main`, width: 56, height: 56 }}>
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Welcome Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Welcome back, {user?.username}! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ready to continue your learning journey?
        </Typography>
      </Box>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Decks"
            value={analytics?.overview?.total_decks || 0}
            icon={<Style />}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Cards"
            value={analytics?.overview?.total_cards || 0}
            icon={<School />}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Study Time"
            value={`${analytics?.overview?.total_study_time_minutes || 0}m`}
            icon={<Timer />}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Weekly Accuracy"
            value={`${analytics?.recent_performance?.accuracy_week || 0}%`}
            icon={<TrendingUp />}
            color="warning"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Card Progress */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Learning Progress
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Mastered Cards</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {analytics?.card_mastery?.mastered || 0} cards
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={
                    analytics?.overview?.total_cards > 0
                      ? (analytics?.card_mastery?.mastered / analytics?.overview?.total_cards) * 100
                      : 0
                  }
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" color="success.main">
                      {analytics?.card_mastery?.mastered || 0}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Mastered
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" color="warning.main">
                      {analytics?.card_mastery?.learning || 0}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Learning
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" color="info.main">
                      {analytics?.card_mastery?.new || 0}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      New
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {analytics?.card_mastery?.due_today > 0 && (
                <Box sx={{ mt: 3, p: 2, bgcolor: 'primary.light', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    📚 {analytics.card_mastery.due_today} cards are due for review today!
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Decks */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Your Decks
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Add />}
                  onClick={() => navigate('/decks')}
                >
                  New Deck
                </Button>
              </Box>

              {recentDecks.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    No decks yet. Create your first deck to get started!
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => navigate('/decks')}
                  >
                    Create Deck
                  </Button>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {recentDecks.slice(0, 4).map((deck) => (
                    <Box
                      key={deck.id}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: 'action.hover',
                        },
                      }}
                      onClick={() => navigate(`/decks/${deck.id}`)}
                    >
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {deck.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                          {deck.category && (
                            <Chip label={deck.category} size="small" />
                          )}
                          <Chip
                            label={`${deck.card_count} cards`}
                            size="small"
                            variant="outlined"
                          />
                        </Box>
                      </Box>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<PlayArrow />}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/study/${deck.id}`);
                        }}
                      >
                        Study
                      </Button>
                    </Box>
                  ))}
                  
                  {recentDecks.length > 4 && (
                    <Button
                      variant="text"
                      onClick={() => navigate('/decks')}
                      sx={{ mt: 1 }}
                    >
                      View All Decks
                    </Button>
                  )}
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;