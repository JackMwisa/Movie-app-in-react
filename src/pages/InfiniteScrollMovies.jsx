import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import MovieList from '../components/MovieList/MovieList';
import { useParams } from 'react-router-dom';
import {
  useFetchPopularMoviesQuery,
  useFetchTopRatedMoviesQuery,
  useFetchUpcomingMoviesQuery,
} from '../services/TMDB';

const InfiniteScrollMovies = () => {
  const { type } = useParams();
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState([]);

  const fetchers = {
    popular: useFetchPopularMoviesQuery,
    top_rated: useFetchTopRatedMoviesQuery,
    upcoming: useFetchUpcomingMoviesQuery,
  };

  const fetchQuery = fetchers[type];
  const { data, isFetching, error } = fetchQuery ? fetchQuery(page) : { data: null, isFetching: false, error: true };

  const { ref, inView } = useInView();

  useEffect(() => {
    if (data?.results) {
      setAllMovies((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    if (inView && !isFetching) {
      setPage((prev) => prev + 1);
    }
  }, [inView, isFetching]);

  useEffect(() => {
    setAllMovies([]);
    setPage(1);
  }, [type]);

  if (!fetchQuery) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h6" color="error">
          Invalid category
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom sx={{ textTransform: 'capitalize' }}>
        {type.replace('-', ' ')} Movies
      </Typography>

      <AnimatePresence initial={false}>
        <motion.div
          key={type}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <MovieList movies={allMovies} />
        </motion.div>
      </AnimatePresence>

      <Box ref={ref} display="flex" justifyContent="center" mt={3}>
        {isFetching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CircularProgress />
          </motion.div>
        )}
      </Box>

      {error && (
        <Typography color="error" align="center" mt={2}>
          Failed to fetch {type} movies.
        </Typography>
      )}
    </Box>
  );
};

export default InfiniteScrollMovies;
