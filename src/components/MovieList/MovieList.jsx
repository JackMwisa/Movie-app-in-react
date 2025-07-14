// src/components/MovieList.jsx
import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const MovieList = ({ movies }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={2}
    >
      {movies.map((movie) => (
        <Card key={movie.id}>
          <CardMedia
            component="img"
            height="300"
            image={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://via.placeholder.com/200x300?text=No+Image'
            }
            alt={movie.title}
          />
          <CardContent>
            <Typography variant="subtitle1">{movie.title}</Typography>
            <Typography variant="body2">Rating: {movie.vote_average}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default MovieList;
