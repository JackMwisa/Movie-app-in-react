// src/components/SerieList/SerieList.jsx
import React from 'react';
import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledSerieCard } from './SerieListStyles';

const SerieList = ({ series = [], loading = false }) => {
  return (
    <Grid container spacing={2}>
      {loading
        ? Array.from(new Array(12)).map((_, idx) => (
            <Grid item xs={6} sm={4} md={2} key={idx}>
              <Skeleton variant="rectangular" width="100%" height={300} />
              <Skeleton variant="text" />
            </Grid>
          ))
        : series.map((serie) => (
            <Grid item xs={6} sm={4} md={2} key={serie.id}>
              <StyledSerieCard component={Link} to={`/series/${serie.id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={
                    serie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${serie.poster_path}`
                      : 'https://via.placeholder.com/300x450?text=No+Image'
                  }
                  alt={serie.name}
                />
                <CardContent>
                  <Typography variant="body2" noWrap>
                    {serie.name}
                  </Typography>
                </CardContent>
              </StyledSerieCard>
            </Grid>
          ))}
    </Grid>
  );
};

export default SerieList;
