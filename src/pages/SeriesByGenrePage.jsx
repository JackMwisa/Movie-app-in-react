import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import SerieList from '../components/SerieList/SerieList'; // ✅ Your component for TV series display
import { useFetchTVGenresQuery, useSearchTVShowsQuery } from '../services/TMDB';

const SeriesByGenrePage = () => {
  const { name } = useParams();
  const [genreId, setGenreId] = useState(null);
  const [page, setPage] = useState(1);
  const [allSeries, setAllSeries] = useState([]);

  const { data: genresData } = useFetchTVGenresQuery();
  const { ref, inView } = useInView();

  // Dynamically create a genre map and find genre ID
  useEffect(() => {
    if (genresData?.genres?.length) {
      const genreMap = genresData.genres.reduce((acc, genre) => {
        acc[genre.name.toLowerCase()] = genre.id;
        return acc;
      }, {});
      const matchedId = genreMap[name?.toLowerCase()];
      setGenreId(matchedId || null);
    }
  }, [genresData, name]);

  // Custom fetch using searchTVShowsQuery by genre (fallback if API doesn't have genre discover for TV)
  const { data, isFetching, error } = useSearchTVShowsQuery({
    query: name,
    page,
  });

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
