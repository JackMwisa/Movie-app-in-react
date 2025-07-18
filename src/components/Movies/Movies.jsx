// src/pages/Movies/Movies.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useFetchPopularMoviesQuery } from '../../services/TMDB';

import { MovieList } from '..'; // Adjust this import based on your folder structure

const Movies = () => {
  const { data, error, isLoading } = useFetchPopularMoviesQuery();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data?.results) {
      setMovies(data.results);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h6" color="error">
          Something went wrong: {error.status || 'Unknown error'}
        </Typography>
      </Box>
    );
  }

  if (!movies.length) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="body1">
          No movies available.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Popular Movies
      </Typography>
      <MovieList movies={movies} />
    </Box>
  );
};

export default Movies;
