import React, { useState } from 'react';
import { AppBar, Button, Avatar, useMediaQuery, Drawer } from '@mui/material';
import {
    Menu as MenuIcon,
    AccountCircle as AccountCircleIcon,
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledToolbar, MobileMenuButton, ThemeToggleButton } from './NavBarStyles';
import { useTheme } from '@mui/material/styles';

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isAuthenticated = false; // Replace with actual auth logic

    return (

        <>
            <AppBar position="fixed">
                <StyledToolbar>
                    {/*  Menu toggle - visible on mobile only */}
                    {isMobile && (
                        <MobileMenuButton color="inherit" aria-label="open drawer" onClick={() => { }}>
                            <MenuIcon />
                        </MobileMenuButton>
                    )}

                    {/*  Brightness toggle - always visible */}
                    <ThemeToggleButton color="inherit" onClick={() => { }}>
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </ThemeToggleButton>

                    {!isMobile && 'Search...'}

                    <div>
                        {!isAuthenticated ? (
                            <Button color="inherit" onClick={() => { }}>
                                Login &nbsp;<AccountCircleIcon />
                            </Button>
                        ) : (
                            <Button color="inherit" component={Link} to={`/profile/`} onClick={() => { }}>
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

            <div>
                <nav className='drawer'>
                    <StyledToolbar />
                    {/* Add your navigation links here */}
                    {isMobile ? (
                        <Drawer
                            variant="temporary"
                            anchor="right"
                            open={mobileOpen}
                            className='mobile-drawer'
                            classes={{ paper: 'mobile-drawer-paper' }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            onClose={() => { }}
                        >
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    ) : (
                        <Drawer
                            variant="permanent"
                            anchor="left"
                            open
                        >
                            {/* Add your drawer content here */}
                        </Drawer>
                    )}
                </nav>
            </div>
        </>
    );
};

export default NavBar;
