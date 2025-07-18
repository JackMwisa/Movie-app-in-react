import React from 'react';
import { useTheme } from '@emotion/react';
import { SidebarContainer, ImageLink, LogoImage } from './SidebarStyles';
import { Link } from 'react-router-dom';
import lightLogo from '../../assets/WHITE.png';
import darkLogo from '../../assets/RED.png';
import { useFetchGenresQuery } from '../../services/TMDB';

import {
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarRateIcon from '@mui/icons-material/StarRate';
import UpdateIcon from '@mui/icons-material/Update';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ScienceIcon from '@mui/icons-material/Science';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ExploreIcon from '@mui/icons-material/Explore';
import TheatersIcon from '@mui/icons-material/Theaters';

const categories = [
  { name: 'Popular', path: '/category/popular', icon: <WhatshotIcon /> },
  { name: 'Top Rated', path: '/category/top_rated', icon: <StarRateIcon /> },
  { name: 'Upcoming', path: '/category/upcoming', icon: <UpdateIcon /> },
];

//  Map of genre names to icons
const genreIcons = {
  Action: <FlashOnIcon />,
  Comedy: <EmojiEmotionsIcon />,
  Drama: <TheaterComedyIcon />,
  Horror: <VisibilityIcon />,
  'Science Fiction': <ScienceIcon />,
  Romance: <FavoriteIcon />,
  Thriller: <HelpOutlineIcon />,
  Documentary: <LocalMoviesIcon />,
  Animation: <AutoAwesomeIcon />,
  Adventure: <ExploreIcon />,
  Fantasy: <TheatersIcon />,
  Mystery: <MovieIcon />,
};

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const logo = theme.palette.mode === 'light' ? lightLogo : darkLogo;

  const { data, isLoading, error } = useFetchGenresQuery();

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
        {isLoading ? (
          <ListItem>
            <ListItemText primary="Loading genres..." />
          </ListItem>
        ) : error ? (
          <ListItem>
            <ListItemText primary="Failed to load genres" />
          </ListItem>
        ) : (
          data.genres.map((genre) => (
            <ListItem
              button
              component={Link}
              to={`/genre/${encodeURIComponent(genre.name)}`}
              key={genre.id}
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
                {/* ✅ Use matching icon or fallback */}
                {genreIcons[genre.name] || <MovieIcon />}
              </ListItemIcon>
              <ListItemText primary={genre.name} />
            </ListItem>
          ))
        )}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
