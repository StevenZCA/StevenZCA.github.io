import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const DeckDetail = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Deck Detail
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Deck detail view coming soon...
        </Typography>
      </Box>
    </Container>
  );
};

export default DeckDetail;