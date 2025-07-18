import React from 'react';
import { Tooltip, Rating, Grow } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  SingleMovieCard,
  MoviePoster,
  MovieContent,
  MovieHeading,
  MovieStars,
  MovieCardLink,
} from './MovieStyles';

const Movie = ({ movie, index }) => {
  return (
    <Grow in timeout={(index + 1) * 250}>
      <MovieCardLink to={`/movies/${movie.id}`}>
        <SingleMovieCard>
          <Tooltip title={movie.title} placement="top" arrow>
            <MoviePoster
              component="img"
              image={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                  : 'https://via.placeholder.com/200x300?text=No+Image'
              }
              alt={movie.title}
            />
          </Tooltip>

          <MovieContent>
            <MovieHeading>{movie.title}</MovieHeading>
            <MovieStars>
              <Rating
                name="read-only"
                value={movie.vote_average / 2}
                precision={0.5}
                readOnly
                size="small"
              />{' '}
              ({movie.vote_average.toFixed(1)})
            </MovieStars>
          </MovieContent>
        </SingleMovieCard>
      </MovieCardLink>
    </Grow>
  );
};

export default Movie;
