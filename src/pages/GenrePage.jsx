import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetchMoviesByGenreQuery } from '../services/TMDB';

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Skeleton,
} from '@mui/material';

const GenrePage = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useFetchMoviesByGenreQuery(name);

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight={600} mb={3}>
        {name.charAt(0).toUpperCase() + name.slice(1)} Movies
      </Typography>

      {isLoading ? (
        <Grid container spacing={2}>
          {[...Array(12)].map((_, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <Skeleton variant="rectangular" height={300} />
                <CardContent>
                  <Skeleton width="80%" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : error || !data ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <Typography variant="h6">Something went wrong. Please try again.</Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {data.results.map((movie) => (
            <Grid item xs={6} sm={4} md={2} key={movie.id}>
              <Card
                component={Link}
                to={`/movies/${movie.id}`}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : 'https://via.placeholder.com/300x450?text=No+Image'
                  }
                  alt={movie.title}
                />
                <CardContent sx={{ p: 1 }}>
                  <Typography variant="body2" fontWeight={500} noWrap>
                    {movie.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default GenrePage;
