// src/components/MovieInformation/MovieInformationStyle.jsx
import { styled } from '@mui/material/styles';
import { Box, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export const RootContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const BackButtonContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const PosterImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

export const GenreChipContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

export const TrailerWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  marginTop: theme.spacing(3),
}));

export const TrailerFrame = styled('iframe')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 0,
}));

export const ActorCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 180,
  objectFit: 'cover',
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export const RecommendedCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textDecoration: 'none',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export const RecommendedCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 300,
  objectFit: 'cover',
}));

export const RecommendedCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),
  flexGrow: 1,
}));

export const StyledLinkCard = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
}));
