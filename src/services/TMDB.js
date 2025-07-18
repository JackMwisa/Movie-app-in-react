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
    //  Popular Movies
    fetchPopularMovies: builder.query({
      query: (page = 1) => `/movie/popular?page=${page}`,
    }),

    //  Top Rated Movies
    fetchTopRatedMovies: builder.query({
      query: (page = 1) => `/movie/top_rated?page=${page}`,
    }),

    //  Upcoming Movies
    fetchUpcomingMovies: builder.query({
      query: (page = 1) => `/movie/upcoming?page=${page}`,
    }),

    //  Movie Details
    fetchMovieDetails: builder.query({
      query: (id) => `/movie/${id}`,
    }),

    //  Search Movies
    searchMovies: builder.query({
      query: ({ query, page = 1 }) =>
        `/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
    }),

    //  Genres
    fetchGenres: builder.query({
      query: () => `/genre/movie/list`,
    }),

    //  Movie Videos (like trailers)
    fetchMovieVideos: builder.query({
      query: (id) => `/movie/${id}/videos`,
    }),

    //  Movie Cast and Crew
    fetchMovieCredits: builder.query({
      query: (id) => `/movie/${id}/credits`,
    }),

    //  Recommended Movies
    fetchRecommendedMovies: builder.query({
      query: (id) => `/movie/${id}/recommendations`,
    }),

    //  Movies by Genre Name
    fetchMoviesByGenre: builder.query({
      query: (genreName) => {
        const genreMap = {
          action: 28,
          adventure: 12,
          animation: 16,
          comedy: 35,
          crime: 80,
          documentary: 99,
          drama: 18,
          family: 10751,
          fantasy: 14,
          history: 36,
          horror: 27,
          music: 10402,
          mystery: 9648,
          romance: 10749,
          sciencefiction: 878,
          tvmovie: 10770,
          thriller: 53,
          war: 10752,
          western: 37,
        };
        const id = genreMap[genreName.toLowerCase().replace(/\s/g, '')];
        return `/discover/movie?with_genres=${id}`;
      },
    }),

    //  Actor Info
    fetchActorDetails: builder.query({
      query: (id) => `/person/${id}`,
    }),

    // Movies by Actor
    fetchActorMovies: builder.query({
      query: (id) => `/person/${id}/movie_credits`,
    }),
  }),
});

export const {
  useFetchPopularMoviesQuery,
  useFetchTopRatedMoviesQuery,
  useFetchUpcomingMoviesQuery,
  useFetchMovieDetailsQuery,
  useSearchMoviesQuery,
  useFetchGenresQuery,
  useFetchMovieVideosQuery,
  useFetchMovieCreditsQuery,
  useFetchRecommendedMoviesQuery,
  useFetchMoviesByGenreQuery,
  useFetchActorDetailsQuery,
  useFetchActorMoviesQuery,
} = tmdbApi;
