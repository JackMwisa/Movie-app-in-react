import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import SerieList from '../components/SerieList/SerieList';
import { useFetchTVGenresQuery, useFetchSeriesByGenreQuery } from '../services/TMDB'; 

const SeriesByGenrePage = () => {
  const { name } = useParams();
  const [genreId, setGenreId] = useState(null);
  const [page, setPage] = useState(1);
  const [allSeries, setAllSeries] = useState([]);

  const { data: genresData } = useFetchTVGenresQuery();
  const { ref, inView } = useInView();

  // Find genre ID from name
  useEffect(() => {
    if (genresData?.genres?.length) {
      const genre = genresData.genres.find(
        (g) => g.name.toLowerCase() === name.toLowerCase()
      );
      setGenreId(genre?.id || null);
    }
  }, [genresData, name]);

  // Use discover endpoint with genre ID
  const { data, isFetching, error } = useFetchSeriesByGenreQuery(
    { genreId, page },
    { skip: !genreId }
  );

  useEffect(() => {
    if (data?.results) {
      setAllSeries((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    if (inView && !isFetching && genreId) {
      setPage((prev) => prev + 1);
    }
  }, [inView, isFetching, genreId]);

  useEffect(() => {
    setAllSeries([]);
    setPage(1);
  }, [name]);

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom sx={{ textTransform: 'capitalize' }}>
        {name} Series
      </Typography>

      <AnimatePresence initial={false}>
        <motion.div
          key={name}
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
          Failed to fetch series for "{name}".
        </Typography>
      )}
    </Box>
  );
};

export default SeriesByGenrePage;