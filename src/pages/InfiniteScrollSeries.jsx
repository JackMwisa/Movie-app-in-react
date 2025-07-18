import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import SerieList from '../components/SerieList/SerieList';
import { useFetchPopularSeriesQuery } from '../services/TMDB';

const InfiniteScrollSeries = () => {
  const [page, setPage] = useState(1);
  const [allSeries, setAllSeries] = useState([]);

  const { data, isFetching, error } = useFetchPopularSeriesQuery(page);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (data?.results) {
      setAllSeries((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    if (inView && !isFetching) {
      setPage((prev) => prev + 1);
    }
  }, [inView, isFetching]);

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Popular Series
      </Typography>

      <AnimatePresence initial={false}>
        <motion.div
          key="series"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <SerieList series={allSeries} />
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
          Failed to fetch popular series.
        </Typography>
      )}
    </Box>
  );
};

export default InfiniteScrollSeries;
