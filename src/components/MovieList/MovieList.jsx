import React from 'react';
import { MovieGrid } from './MovieListStyles';
import { Movie } from '..';

const MovieList = ({ movies }) => {
  return (
    <MovieGrid>
      {movies.map((movie, index) => (
        <Movie key={movie.id} movie={movie} index={index} />
      ))}
    </MovieGrid>
  );
};

export default MovieList;
