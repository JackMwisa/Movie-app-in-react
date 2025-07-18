import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  Search as SearchIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { StyledSearchBox } from './SearchStyles';

const Search = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
    setQuery('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search/${encodeURIComponent(query.trim())}`);
    setTimeout(() => {
      setSearchVisible(false);
      setQuery('');
    }, 200);
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

      <StyledSearchBox $visible={searchVisible}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </StyledSearchBox>
    </>
  );
};

export default Search;
