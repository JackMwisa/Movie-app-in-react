// src/components/styles/MovieListStyles.js
import { styled } from '@mui/material/styles';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

// Grid container for movie cards
export const MovieGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

// Styled individual movie card
export const MovieCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

// Movie poster image
export const PosterImage = styled(CardMedia)({
  height: 300,
  objectFit: 'cover',
});

// Content below the image
export const MovieCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

// Movie title text
export const MovieTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  color: theme.palette.text.primary,
}));

// Movie rating text
export const MovieRating = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));
