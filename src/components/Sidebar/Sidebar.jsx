import React from 'react';
import { useTheme } from '@emotion/react';
import { SidebarContainer, ImageLink, LogoImage } from './SidebarStyles';
import { Link } from 'react-router-dom';
import lightLogo from '../../assets/WHITE.png';
import darkLogo from '../../assets/RED.png';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const logo = theme.palette.mode === 'light' ? lightLogo : darkLogo;

  console.log("Current theme mode:", theme.palette.mode);

  return (
    <SidebarContainer>
      <ImageLink to="/" onClick={() => setMobileOpen(false)}>
        <LogoImage src={logo} alt="Filmsaga logo" />
      </ImageLink>

      <Divider />

    </SidebarContainer>
  );
};

export default Sidebar;
