import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSearchMoviesQuery } from '../services/TMDB';
import {
  Box,
  CircularProgress,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

const SearchResults = () => {
  const { query } = useParams();
  const { data, isLoading, error } = useSearchMoviesQuery({ query });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !data?.results?.length) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h6">No results found for "{query}"</Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Results for "{query}"
      </Typography>

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
                <Typography variant="body2" noWrap>
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchResults;
