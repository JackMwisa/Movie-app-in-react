import { Toolbar, IconButton,  Drawer, Button, Avatar, } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '80px',
  padding: theme.spacing(0, 2),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0px',
    flexWrap: 'wrap ',
  },
}));


export const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  outline: 'none',
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    display: 'none',  
  },
}));
