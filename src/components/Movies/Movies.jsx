import React, { useState, useEffect } from 'react';
import { useFetchMoviesQuery } from '../../services/TMDB';
import { Box, CircularProgress, Typography } from '@mui/material';
import { MovieList } from '..'; 

const Movies = () => {
  const { data, error, isLoading } = useFetchMoviesQuery();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data?.results) {
      setMovies(data.results);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress  />
      </Box>
    );
  }

  if (!data.results.length){
    return(
      Box
    )
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h6" color="error">
          Something went wrong: {error.status}
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>Popular Movies</Typography>
      <MovieList movies={movies} />
    </Box>
  );
};

export default Movies;
