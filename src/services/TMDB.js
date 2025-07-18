import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    // 🔹 MOVIES
    fetchPopularMovies: builder.query({
      query: (page = 1) => `/movie/popular?page=${page}`,
    }),
    fetchTopRatedMovies: builder.query({
      query: (page = 1) => `/movie/top_rated?page=${page}`,
    }),
    fetchUpcomingMovies: builder.query({
      query: (page = 1) => `/movie/upcoming?page=${page}`,
    }),
    fetchMovieDetails: builder.query({
      query: (id) => `/movie/${id}`,
    }),
    fetchMovieVideos: builder.query({
      query: (id) => `/movie/${id}/videos`,
    }),
    fetchMovieCredits: builder.query({
      query: (id) => `/movie/${id}/credits`,
    }),
    fetchRecommendedMovies: builder.query({
      query: (id) => `/movie/${id}/recommendations`,
    }),
    searchMovies: builder.query({
      query: ({ query, page = 1 }) =>
        `/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
    }),
    fetchGenres: builder.query({
      query: () => `/genre/movie/list`,
    }),
    fetchMoviesByGenre: builder.query({
      query: (genreId) => `/discover/movie?with_genres=${genreId}`,
    }),

    // 🔹 TV SHOWS / SERIES
    fetchPopularSeries: builder.query({
      query: (page = 1) => `/tv/popular?page=${page}`,
    }),
    fetchTopRatedSeries: builder.query({
      query: (page = 1) => `/tv/top_rated?page=${page}`,
    }),
    fetchAiringTodaySeries: builder.query({
      query: (page = 1) => `/tv/airing_today?page=${page}`,
    }),
    fetchOnTheAirSeries: builder.query({
      query: (page = 1) => `/tv/on_the_air?page=${page}`,
    }),
    fetchSeriesDetails: builder.query({
      query: (id) => `/tv/${id}`,
    }),
    fetchSeriesVideos: builder.query({
      query: (id) => `/tv/${id}/videos`,
    }),
    fetchSeriesCredits: builder.query({
      query: (id) => `/tv/${id}/credits`,
    }),
    fetchRecommendedSeries: builder.query({
      query: (id) => `/tv/${id}/recommendations`,
    }),
    searchTVShows: builder.query({
      query: ({ query, page = 1 }) =>
        `/search/tv?query=${encodeURIComponent(query)}&page=${page}`,
    }),
    fetchTVGenres: builder.query({
      query: () => `/genre/tv/list`,
    }),
    fetchSeriesByGenre: builder.query({
      query: (genreId) => `/discover/tv?with_genres=${genreId}`,
    }),

    // 🔹 MULTI & ACTORS
    searchMulti: builder.query({
      query: ({ query, page = 1 }) =>
        `/search/multi?query=${encodeURIComponent(query)}&page=${page}`,
    }),
    fetchActorDetails: builder.query({
      query: (id) => `/person/${id}`,
    }),
    fetchActorMovies: builder.query({
      query: (id) => `/person/${id}/movie_credits`,
    }),
    fetchActorSeries: builder.query({
      query: (id) => `/person/${id}/tv_credits`,
    }),
  }),
});

export const {
  // Movies
  useFetchPopularMoviesQuery,
  useFetchTopRatedMoviesQuery,
  useFetchUpcomingMoviesQuery,
  useFetchMovieDetailsQuery,
  useFetchMovieVideosQuery,
  useFetchMovieCreditsQuery,
  useFetchRecommendedMoviesQuery,
  useSearchMoviesQuery,
  useFetchGenresQuery,
  useFetchMoviesByGenreQuery,

  // TV Shows / Series
  useFetchPopularSeriesQuery,
  useFetchTopRatedSeriesQuery,
  useFetchAiringTodaySeriesQuery,
  useFetchOnTheAirSeriesQuery,
  useFetchSeriesDetailsQuery,
  useFetchSeriesVideosQuery,
  useFetchSeriesCreditsQuery,
  useFetchRecommendedSeriesQuery,
  useSearchTVShowsQuery,
  useFetchTVGenresQuery,
  useFetchSeriesByGenreQuery,

  // Multi & Actor
  useSearchMultiQuery,
  useFetchActorDetailsQuery,
  useFetchActorMoviesQuery,
  useFetchActorSeriesQuery,
} = tmdbApi;
