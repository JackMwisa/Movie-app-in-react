// TMDB.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Ensure this is a TMDB v4 Bearer token
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${API_KEY}`);
      headers.set('Content-Type', 'application/json;charset=utf-8');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: (page = 1) => `/movie/popular?page=${page}`,
    }),
    fetchMovieDetails: builder.query({
      query: (id) => `/movie/${id}`,
    }),
    searchMovies: builder.query({
      query: ({ query, page = 1 }) =>
        `/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
    }),
  }),
});

export const {
  useFetchMoviesQuery,
  useFetchMovieDetailsQuery,
  useSearchMoviesQuery,
} = tmdbApi;
