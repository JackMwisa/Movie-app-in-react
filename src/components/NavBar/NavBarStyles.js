import { styled } from '@mui/material/styles';
import { Toolbar, IconButton } from '@mui/material';

// Toolbar with padding/margin
export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '80px',
  padding: theme.spacing(0, 2),
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
}));

// Only visible on small screens
export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

// Brightness toggle
export const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(1),
}));
