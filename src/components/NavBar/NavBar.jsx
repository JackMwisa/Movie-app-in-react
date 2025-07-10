import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Avatar,
  useMediaQuery,
  Drawer,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {
  StyledToolbar,
  MobileMenuButton,
  ThemeToggleButton,
} from './NavBarStyles';
import { useTheme } from '@mui/material/styles';
import Sidebar from '../Sidebar/Sidebar';

const drawerWidth = 240;



const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = false; // Replace with actual logic

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer - 1 }}>
        <StyledToolbar>
          {isMobile && (
            <MobileMenuButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </MobileMenuButton>
          )}

          <ThemeToggleButton color="inherit" onClick={() => { /* toggleTheme */ }}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </ThemeToggleButton>

          {!isMobile && 'Search...'}

          <div>
            {!isAuthenticated ? (
              <Button color="inherit">
                Login &nbsp;<AccountCircleIcon />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/profile">
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt="User Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )}
          </div>

          {isMobile && 'Search...'}
        </StyledToolbar>
      </AppBar>

      <nav className="drawer">
        {/* Desktop Drawer */}
        {!isMobile && (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            open
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        )}

        {/* Mobile Drawer */}
        {isMobile && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </>
  );
};

export default NavBar;
