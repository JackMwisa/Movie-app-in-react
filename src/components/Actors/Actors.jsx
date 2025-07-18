// src/components/pages/Actors.jsx
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetchActorDetailsQuery, useFetchActorMoviesQuery } from '../../services/TMDB';
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Actors = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: actor, isLoading: loadingActor } = useFetchActorDetailsQuery(id);
  const { data: movies, isLoading: loadingMovies } = useFetchActorMoviesQuery(id);

  if (loadingActor || loadingMovies) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{ mb: 3 }}
      >
        Back
      </Button>

      {/* Actor Info */}
      <Box display="flex" gap={4} flexWrap="wrap" mb={4}>
        <img
          src={
            actor?.profile_path
              ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
              : 'https://via.placeholder.com/300x450?text=No+Image'
          }
          alt={actor?.name}
          style={{ borderRadius: '10px', width: '300px', height: 'auto' }}
        />

        <Box>
          <Typography variant="h4" fontWeight={600}>
            {actor?.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {actor?.place_of_birth}
          </Typography>
          <Typography variant="body1" paragraph>
            {actor?.biography || 'No biography available.'}
          </Typography>
        </Box>
      </Box>

      {/* Known For */}
      <Typography variant="h5" gutterBottom>
        Known For
      </Typography>
      <Grid container spacing={2}>
        {movies?.cast?.slice(0, 8).map((movie) => (
          <Grid item xs={6} sm={4} md={3} key={movie.id}>
            <Card component={Link} to={`/movies/${movie.id}`} sx={{ textDecoration: 'none' }}>
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
              <CardContent>
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

export default Actors;
