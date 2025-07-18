import React from 'react';
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import {
  Actors,
  Movies,
  MovieInformation,
  NavBar,
  Profile,
  Series,
  SeriesInformation,
} from './index';

import GenrePage from '../pages/GenrePage';
import SearchResults from '../pages/SearchResults';
import InfiniteScrollMovies from '../pages/InfiniteScrollMovies';
import InfiniteScrollSeries from '../pages/InfiniteScrollSeries'; // ✅ New
import SeriesByGenrePage from '../pages/SeriesByGenrePage';     // ✅ New

import {
  RootContainer,
  MainContent,
  ToolbarSpacer
} from './layout/AppLayout';

const App = () => {
  return (
    <RootContainer>
      <CssBaseline />
      <NavBar />
      <MainContent>
        <ToolbarSpacer />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/genre/:name" element={<GenrePage />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/category/:type" element={<InfiniteScrollMovies />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/profile/:id" element={<Profile />} />

          {/* ✅ Series paths */}
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<SeriesInformation />} />
          <Route path="/tvgenre/:name" element={<SeriesByGenrePage />} />
          <Route path="/tvcategory/:type" element={<InfiniteScrollSeries />} />
        </Routes>
      </MainContent>
    </RootContainer>
  );
};

export default App;
