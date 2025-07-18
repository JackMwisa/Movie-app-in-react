// src/pages/Series/Series.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useFetchPopularSeriesQuery } from '../../services/TMDB';
import {
  SeriesContainer,
  SeriesCard,
  SeriesImage,
  SeriesTitle,
} from './SeriesStyle';

const Series = () => {
  const [page, setPage] = useState(1);
  const [seriesList, setSeriesList] = useState([]);

  const { data, isFetching, error } = useFetchPopularSeriesQuery(page);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (data?.results) {
      setSeriesList((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    if (inView && !isFetching) {
      setPage((prev) => prev + 1);
    }
  }, [inView, isFetching]);

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error">Failed to load series</Typography>
      </Box>
    );
  }

  return (
    <SeriesContainer>
      <Typography variant="h4" gutterBottom>
        Popular Series
      </Typography>

      <Grid container spacing={2}>
        {seriesList.map((tv) => (
          <Grid item xs={6} sm={4} md={2} key={tv.id}>
            <SeriesCard to={`/series/${tv.id}`}>
              <SeriesImage
                src={
                  tv.poster_path
                    ? `https://image.tmdb.org/t/p/w300${tv.poster_path}`
                    : 'https://via.placeholder.com/300x450?text=No+Image'
                }
                alt={tv.name}
              />
              <SeriesTitle>{tv.name}</SeriesTitle>
            </SeriesCard>
          </Grid>
        ))}
      </Grid>

      <Box ref={ref} display="flex" justifyContent="center" mt={3}>
        {isFetching && <CircularProgress />}
      </Box>
    </SeriesContainer>
  );
};

export default Series;
