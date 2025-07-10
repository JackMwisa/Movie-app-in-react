import { styled } from '@mui/material/styles';
import { Box, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';

// Main container
export const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '240px',
  height: '100vh',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
  overflowY: 'auto',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    maxHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
    overflowY: 'auto',
  },
}));

// Link wrapper for the logo
export const ImageLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
  },
}));

// Actual logo image
export const LogoImage = styled('img')(({ theme }) => ({
  maxWidth: '150px',
  width: '100%',
  height: 'auto',

  [theme.breakpoints.down('sm')]: {
    maxWidth: '120px',
    height: '40px',
    objectFit: 'contain',
  },
}));

// List header style
export const NavigationTitle = styled(ListSubheader)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    paddingLeft: theme.spacing(1),
  },
}));
