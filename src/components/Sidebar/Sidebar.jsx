import React from 'react';
import { useTheme } from '@emotion/react';
import { SidebarContainer, ImageLink, LogoImage } from './SidebarStyles';
import { Link } from 'react-router-dom';

import lightLogo from '../../assets/WHITE.png';
import darkLogo from '../../assets/RED.png';

import {
  useFetchGenresQuery,
  useFetchTVGenresQuery, // ✅ New
} from '../../services/TMDB';

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
import TvIcon from '@mui/icons-material/Tv';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ScheduleIcon from '@mui/icons-material/Schedule';

const movieCategories = [
  { name: 'Popular', path: '/category/popular', icon: <WhatshotIcon /> },
  { name: 'Top Rated', path: '/category/top_rated', icon: <StarRateIcon /> },
  { name: 'Upcoming', path: '/category/upcoming', icon: <UpdateIcon /> },
];

const tvCategories = [
  { name: 'Popular Series', path: '/tvcategory/popular', icon: <TvIcon /> },
  { name: 'Top Rated Series', path: '/tvcategory/top_rated', icon: <StarRateIcon /> },
  { name: 'Currently Airing', path: '/tvcategory/on_the_air', icon: <ScheduleIcon /> },
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

  const {
    data: movieGenresData,
    isLoading: loadingMovieGenres,
    error: movieGenresError,
  } = useFetchGenresQuery();

  const {
    data: tvGenresData,
    isLoading: loadingTVGenres,
    error: tvGenresError,
  } = useFetchTVGenresQuery(); // ✅

  return (
    <SidebarContainer>
      <ImageLink to="/" onClick={() => setMobileOpen(false)}>
        <LogoImage src={logo} alt="Filmsaga logo" />
      </ImageLink>

      <Divider />

      {/* 🎬 Movie Categories */}
      <List>
        <ListSubheader>Movie Categories</ListSubheader>
        {movieCategories.map((item) => (
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

      {/* 📺 TV Series Categories */}
      <List>
        <ListSubheader>TV Series</ListSubheader>
        {tvCategories.map((item) => (
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

      {/* 🎭 Movie Genres */}
      <List>
        <ListSubheader>Movie Genres</ListSubheader>
        {loadingMovieGenres ? (
          <ListItem>
            <ListItemText primary="Loading..." />
          </ListItem>
        ) : movieGenresError ? (
          <ListItem>
            <ListItemText primary="Failed to load movie genres" />
          </ListItem>
        ) : (
          movieGenresData.genres.map((genre) => (
            <ListItem
              button
              component={Link}
              to={`/Movies/${encodeURIComponent(genre.name)}`}
              key={`movie-${genre.id}`}
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
                {genreIcons[genre.name] || <MovieIcon />}
              </ListItemIcon>
              <ListItemText primary={genre.name} />
            </ListItem>
          ))
        )}
      </List>

      <Divider />

      {/* 📺 TV Genres */}
      <List>
        <ListSubheader>TV Genres</ListSubheader>
        {loadingTVGenres ? (
          <ListItem>
            <ListItemText primary="Loading..." />
          </ListItem>
        ) : tvGenresError ? (
          <ListItem>
            <ListItemText primary="Failed to load TV genres" />
          </ListItem>
        ) : (
          tvGenresData.genres.map((genre) => (
            <ListItem
              button
              component={Link}
              to={`/tv-genre/${encodeURIComponent(genre.name)}`}
              key={`tv-${genre.id}`}
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
                {genreIcons[genre.name] || <TvIcon />}
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
