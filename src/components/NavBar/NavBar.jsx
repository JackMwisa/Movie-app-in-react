import React from 'react';
import { AppBar, Button, Avatar, useMediaQuery } from '@mui/material';
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
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isAuthenticated = false; // Replace with actual auth logic

    return (
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
    );
};

export default NavBar;
