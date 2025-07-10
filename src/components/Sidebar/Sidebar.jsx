import React from 'react';
import { useTheme } from '@emotion/react';
import { SidebarContainer, ImageLink, LogoImage } from './SidebarStyles';
import { Link } from 'react-router-dom';
import lightLogo from '../../assets/WHITE.png';
import darkLogo from '../../assets/RED.png';

import {
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import MovieIcon from '@mui/icons-material/Movie';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import ScienceIcon from '@mui/icons-material/Science';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ExploreIcon from '@mui/icons-material/Explore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TheatersIcon from '@mui/icons-material/Theaters';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarRateIcon from '@mui/icons-material/StarRate';
import UpdateIcon from '@mui/icons-material/Update';

const categories = [
  { name: 'Popular', path: '/category/popular', icon: <WhatshotIcon /> },
  { name: 'Top Rated', path: '/category/top_rated', icon: <StarRateIcon /> },
  { name: 'Upcoming', path: '/category/upcoming', icon: <UpdateIcon /> },
];

const genres = [
  { name: 'Action', path: '/genre/action', icon: <FlashOnIcon /> },
  { name: 'Comedy', path: '/genre/comedy', icon: <EmojiEmotionsIcon /> },
  { name: 'Drama', path: '/genre/drama', icon: <TheaterComedyIcon /> },
  { name: 'Horror', path: '/genre/horror', icon: <VisibilityIcon /> },
  { name: 'Sci-Fi', path: '/genre/sci-fi', icon: <ScienceIcon /> },
  { name: 'Romance', path: '/genre/romance', icon: <FavoriteIcon /> },
  { name: 'Thriller', path: '/genre/thriller', icon: <HelpOutlineIcon /> },
  { name: 'Documentary', path: '/genre/documentary', icon: <LocalMoviesIcon /> },
  { name: 'Animation', path: '/genre/animation', icon: <AutoAwesomeIcon /> },
  { name: 'Fantasy', path: '/genre/fantasy', icon: <TheatersIcon /> },
  { name: 'Adventure', path: '/genre/adventure', icon: <ExploreIcon /> },
  { name: 'Mystery', path: '/genre/mystery', icon: <MovieIcon /> },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const logo = theme.palette.mode === 'light' ? lightLogo : darkLogo;

  return (
    <SidebarContainer>
      <ImageLink to="/" onClick={() => setMobileOpen(false)}>
        <LogoImage src={logo} alt="Filmsaga logo" />
      </ImageLink>

      <Divider />

      {/* Categories Section */}
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.path}
            key={item.name}
            onClick={() => setMobileOpen(false)}
            sx={{
              textDecoration: 'none',
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx={{
                color: theme.palette.text.primary,
                transition: 'color 0.3s',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* Genres Section */}
      <List>
        <ListSubheader>Genres</ListSubheader>
        {genres.map((genre) => (
          <ListItem
            button
            component={Link}
            to={genre.path}
            key={genre.name}
            onClick={() => setMobileOpen(false)}
            sx={{
              textDecoration: 'none',
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx={{
                color: theme.palette.text.primary,
                transition: 'color 0.3s',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {genre.icon}
            </ListItemIcon>
            <ListItemText primary={genre.name} />
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
