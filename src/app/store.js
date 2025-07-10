import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // your reducers go here
    // e.g., movies: moviesReducer,
    // actors: actorsReducer,
    // profile: profileReducer,
    
  },
});

export default store;
 