import React from 'react';
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Actors, Movies, MovieInformation, NavBar, Profile } from './index';
import { RootContainer, MainContent, ToolbarSpacer } from './layout/AppLayout';


const App = () => {


  return (

      <RootContainer>
        <CssBaseline />
        <NavBar />
        <MainContent>
          <ToolbarSpacer />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </MainContent>
    </RootContainer>
 
  );
};



export default App;