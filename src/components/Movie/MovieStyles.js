import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

/** Link wrapper around each movie card */
export const MovieCardLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
}));

/** Single movie card container */
export const SingleMovieCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1.5),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
  cursor: 'pointer',
  overflow: 'hidden',

  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(1),
  },
}));

/** Movie poster image with zoom on hover */
export const MoviePoster = styled(CardMedia)(({ theme }) => ({
  height: 300,
  objectFit: 'cover',
  transition: 'transform 0.35s ease',

  [theme.breakpoints.down('sm')]: {
    height: 220,
  },

  // Zoom in the image when the parent card is hovered
  [`${SingleMovieCard}:hover &`]: {
    transform: 'scale(1.05)',
  },
}));

/** Content area below the poster */
export const MovieContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.2),
  },
}));

/** Movie title text */
export const MovieHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

/** Rating section text */
export const MovieStars = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
}));
