// all calls to the TMDB API should be made through this service
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// TMDB API configuration

const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: (page = 1) => `/movie/popular?page=${page}`,
    }),
  }),
});

export const { useFetchMoviesQuery } = tmdbApi;


const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;

export const fetchMovies = async (page = 1) => {
  try {
    const response = await tmdb.get('/movie/popular', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};