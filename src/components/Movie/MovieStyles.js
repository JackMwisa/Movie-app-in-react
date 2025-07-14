import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

// Single movie card
export const SingleMovieCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1.5),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  overflow: 'hidden',

  '&:hover': {
    transform: 'scale(1.03)',
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(1),
  },
}));

// Poster image
export const MoviePoster = styled(CardMedia)(({ theme }) => ({
  height: 300,
  objectFit: 'cover',

  [theme.breakpoints.down('sm')]: {
    height: 220,
  },
}));

// Movie content area
export const MovieContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.2),
  },
}));

// Movie title
export const MovieHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

// Rating display
export const MovieStars = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
}));
