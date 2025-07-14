import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Responsive grid container
export const MovieGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  padding: theme.spacing(2),

  gridTemplateColumns: 'repeat(1, 1fr)', // xs

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)', // sm: 2 cols
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)', // md: 3 cols
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)', // lg: 4 cols
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(6, 1fr)', // xl: 6 cols
  },
}));
