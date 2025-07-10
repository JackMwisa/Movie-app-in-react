import { styled } from '@mui/material/styles';
import { Box, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '240px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
}));

export const ImageLink = styled(Link)(({ theme }) => ({
  display: 'block',
  textAlign: 'center',
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    marginBottom: 0,
  },
}));

export const LogoImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxWidth: 150,
  [theme.breakpoints.down('sm')]: {
    maxWidth: 160,
    padding: theme.spacing(0.5),
  },
}));

export const NavigationTitle = styled(ListSubheader)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
