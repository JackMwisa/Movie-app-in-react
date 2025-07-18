// src/components/Search/Search.jsx
import React, { useState, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
  Popper,
  ClickAwayListener,
  Typography,
} from '@mui/material';
import {
  Search as SearchIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSearchMoviesQuery } from '../../services/TMDB';
import { StyledSearchBox } from './SearchStyles';
import debounce from 'lodash.debounce';

const Search = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [triggerQuery, setTriggerQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const { data } = useSearchMoviesQuery(
    { query: triggerQuery },
    { skip: !triggerQuery }
  );

  // Debounce search input to reduce API calls
  const debouncedSearch = debounce((value) => {
    setTriggerQuery(value);
  }, 300);

  useEffect(() => {
    if (query.trim()) debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query]);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    setQuery('');
    setTriggerQuery('');
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
      toggleSearch();
    }
  };

  const handleSuggestionClick = (movie) => {
    navigate(`/movies/${movie.id}`);
    toggleSearch();
  };

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <strong key={index} style={{ color: '#1976d2' }}>{part}</strong>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <>
      <IconButton
        onClick={(e) => {
          toggleSearch();
          setAnchorEl(e.currentTarget);
        }}
        sx={{ ml: 1 }}
        aria-label={searchVisible ? 'Close Search' : 'Open Search'}
      >
        {searchVisible ? <CloseIcon /> : <SearchIcon />}
      </IconButton>

      <ClickAwayListener onClickAway={() => setSearchVisible(false)}>
        <div>
          <StyledSearchBox visible={searchVisible}>
            <TextField
              fullWidth
              autoFocus
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </StyledSearchBox>

          {/* Autocomplete Popper */}
          {searchVisible && query && data?.results?.length > 0 && (
            <Popper
              open
              anchorEl={anchorEl}
              placement="bottom-start"
              style={{ zIndex: 9999, width: '100%', maxWidth: 500, marginTop: 8 }}
            >
              <Paper elevation={3}>
                <List dense>
                  {data.results.slice(0, 5).map((movie) => (
                    <ListItem
                      button
                      key={movie.id}
                      onClick={() => handleSuggestionClick(movie)}
                    >
                      <ListItemAvatar>
                        <Avatar
                          src={
                            movie.poster_path
                              ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                              : 'https://via.placeholder.com/92x138?text=?'
                          }
                          alt={movie.title}
                          variant="rounded"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="body1">
                            {highlightText(movie.title, query)}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Popper>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
};

export default Search;
