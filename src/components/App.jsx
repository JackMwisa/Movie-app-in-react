import React from 'react';
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (

    <div>
      <CssBaseline />

      <main>
        <Routes>
          <Route path="/" element={<h2>Movies</h2>} />
          <Route path="/profile/:id" element={<h2>Profile</h2>} />
          <Route path="/actors/:id" element={<h2>Actors</h2>} />
          <Route path="/movies/:id" element={<h2>Movie Information</h2>} />
        </Routes>
      </main>

    </div>
  )
}

export default App;