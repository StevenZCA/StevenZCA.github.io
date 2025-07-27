import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box,
  TextField,
  Chip,
  InputAdornment,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Add,
  Search,
  PlayArrow,
  Edit,
  Public,
  Lock,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import LoadingSpinner from '../common/LoadingSpinner';

const DeckList = () => {
  const navigate = useNavigate();
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [categories, setCategories] = useState([]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newDeck, setNewDeck] = useState({
    title: '',
    description: '',
    category: '',
    difficulty_level: 'beginner',
    is_public: false,
  });

  useEffect(() => {
    fetchDecks();
    fetchCategories();
  }, []);

  const fetchDecks = async () => {
    try {
      const response = await axios.get('/api/decks');
      setDecks(response.data);
    } catch (error) {
      console.error('Failed to fetch decks:', error);
      toast.error('Failed to load decks');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/decks/categories/list');
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const handleCreateDeck = async () => {
    try {
      const response = await axios.post('/api/decks', newDeck);
      setDecks([response.data, ...decks]);
      setCreateDialogOpen(false);
      setNewDeck({
        title: '',
        description: '',
        category: '',
        difficulty_level: 'beginner',
        is_public: false,
      });
      toast.success('Deck created successfully!');
      navigate(`/decks/${response.data.id}`);
    } catch (error) {
      console.error('Failed to create deck:', error);
      toast.error('Failed to create deck');
    }
  };

  const filteredDecks = decks.filter((deck) => {
    const matchesSearch = deck.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deck.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || deck.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <LoadingSpinner message="Loading decks..." />;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          My Decks
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setCreateDialogOpen(true)}
          size="large"
        >
          Create Deck
        </Button>
      </Box>

      {/* Filters */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          placeholder="Search decks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ flex: 1 }}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={categoryFilter}
            label="Category"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Deck Grid */}
      <Grid container spacing={3}>
        {filteredDecks.length === 0 ? (
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                {decks.length === 0 ? 'No decks yet' : 'No decks match your search'}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {decks.length === 0 
                  ? 'Create your first deck to start learning!'
                  : 'Try adjusting your search or filters'
                }
              </Typography>
              {decks.length === 0 && (
                <Button
                  variant="contained"
                  startIcon={<Add />}
                  onClick={() => setCreateDialogOpen(true)}
                >
                  Create Your First Deck
                </Button>
              )}
            </Box>
          </Grid>
        ) : (
          filteredDecks.map((deck) => (
            <Grid item xs={12} sm={6} md={4} key={deck.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: (theme) => theme.shadows[8],
                  },
                }}
                onClick={() => navigate(`/decks/${deck.id}`)}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {deck.title}
                    </Typography>
                    {deck.is_public ? <Public color="primary" /> : <Lock color="action" />}
                  </Box>
                  
                  {deck.description && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {deck.description.length > 100 
                        ? `${deck.description.substring(0, 100)}...`
                        : deck.description
                      }
                    </Typography>
                  )}
                  
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    {deck.category && (
                      <Chip label={deck.category} size="small" />
                    )}
                    <Chip 
                      label={deck.difficulty_level} 
                      size="small" 
                      variant="outlined"
                      color={
                        deck.difficulty_level === 'beginner' ? 'success' :
                        deck.difficulty_level === 'intermediate' ? 'warning' : 'error'
                      }
                    />
                    <Chip 
                      label={`${deck.card_count || 0} cards`}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
                
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<PlayArrow />}
                    fullWidth
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/study/${deck.id}`);
                    }}
                    disabled={!deck.card_count || deck.card_count === 0}
                  >
                    Study
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/decks/${deck.id}`);
                    }}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {/* Floating Action Button for mobile */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: { xs: 'flex', md: 'none' },
        }}
        onClick={() => setCreateDialogOpen(true)}
      >
        <Add />
      </Fab>

      {/* Create Deck Dialog */}
      <Dialog 
        open={createDialogOpen} 
        onClose={() => setCreateDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Create New Deck</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Deck Title"
            fullWidth
            variant="outlined"
            value={newDeck.title}
            onChange={(e) => setNewDeck({ ...newDeck, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={newDeck.description}
            onChange={(e) => setNewDeck({ ...newDeck, description: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Category"
            fullWidth
            variant="outlined"
            value={newDeck.category}
            onChange={(e) => setNewDeck({ ...newDeck, category: e.target.value })}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Difficulty Level</InputLabel>
            <Select
              value={newDeck.difficulty_level}
              label="Difficulty Level"
              onChange={(e) => setNewDeck({ ...newDeck, difficulty_level: e.target.value })}
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleCreateDeck}
            variant="contained"
            disabled={!newDeck.title.trim()}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DeckList;