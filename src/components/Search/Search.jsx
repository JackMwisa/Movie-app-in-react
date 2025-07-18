import React, { useState, useEffect, useRef } from 'react';
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
  const inputRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const { data } = useSearchMoviesQuery(
    { query: triggerQuery },
    { skip: !triggerQuery }
  );

  const debouncedSearch = useRef(
    debounce((value) => {
      setTriggerQuery(value);
    }, 300)
  ).current;

  useEffect(() => {
    if (query.trim()) debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query]);

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
    setQuery('');
    setTriggerQuery('');
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        setAnchorEl(inputRef.current);
      }
    }, 100); // Ensure DOM is ready
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
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <strong key={i} style={{ color: '#1976d2' }}>{part}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <>
      <IconButton
        onClick={toggleSearch}
        sx={{ ml: 1 }}
        aria-label={searchVisible ? 'Close Search' : 'Open Search'}
      >
        {searchVisible ? <CloseIcon /> : <SearchIcon />}
      </IconButton>

      <ClickAwayListener onClickAway={() => setSearchVisible(false)}>
        <div>
          <StyledSearchBox visible={searchVisible}>
            <TextField
              inputRef={inputRef}
              fullWidth
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

          {searchVisible && anchorEl && query && data?.results?.length > 0 && (
            <Popper
              open
              anchorEl={anchorEl}
              placement="bottom-start"
              style={{ zIndex: 1300, width: anchorEl?.clientWidth || 500 }}
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
