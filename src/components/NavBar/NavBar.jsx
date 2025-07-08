import React from 'react';
import { AppBar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import {
    Menu as MenuIcon,
    AccountCircle as AccountCircleIcon,
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledToolbar, MenuButton } from './NavBarStyles';
import { useTheme } from '@mui/material/styles';

const NavBar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isAuthenticated = false; // Replace with actual authentication logic

    return (
        <AppBar position="fixed">
            <StyledToolbar>
                {isMobile && (
                    <MenuButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => {
                            // setMobileOpen(true);
                        }}
                    >
                        <MenuIcon />
                    </MenuButton>
                )}
                <MenuButton
                    color="inherit"
                    sx={{ ml: 1 }}
                    onClick={() => {
                        // setMobileOpen(true);
                    }}
                >
                    {theme.palette.mode === 'dark' ? (
                        <Brightness7Icon />
                    ) : (
                        <Brightness4Icon />
                    )}
                </MenuButton>
                {!isMobile && "Search Bar Placeholder   "}
                <div>
                    {!isAuthenticated ? (
                        <Button color="inherit" component={Link} to="/login">
                            Login &nbsp;<AccountCircleIcon />
                        </Button>
                    ) : (
                        <button
                            color="inherit"
                            component={Link}
                            to={`/profile/`}
                        >
                            {!isMobile && <>My Movies &nbsp;</>}
                            <Avatar
                                sx={{ width: 30, height: 30 }}
                                alt="User Profile"
                                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" // Replace with actual user avatar URL
                            />
                        </button>
                    )}
                </div>
                {isMobile && "Search..."}

            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;
