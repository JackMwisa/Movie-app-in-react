import React from 'react'
import { useFetchMoviesQuery } from '../../services/TMDB';
import { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const Movies = () => {

    console.log("Movies component rendered");


    const { data, error, isLoading } = useFetchMoviesQuery();
    const [movies, setMovies] = useState([]);

    console.log(data);
    console.log(error);
    
    

    return (
        <div>Movies</div>
    )
}

export default Movies