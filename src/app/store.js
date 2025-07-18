import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import moviesReducer from '../features/moviesSlice';

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
