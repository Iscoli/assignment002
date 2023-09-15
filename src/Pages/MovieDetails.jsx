import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState({});
  console.log(movieDetails,'movie details')
  
const {id} = useParams();


  useEffect(() => {
    setLoading(true);
    setError(null);

    const apiKey = "d51ba7ba59eaefac134cd7fa1b41890a";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}`;
    
    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          language: 'en-US',
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <div
        >
         <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
         />
          <h1>{movieDetails.title}</h1>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Runtime: {movieDetails.runtime} minutes</p>
          <p>Overview: {movieDetails.overview}</p>
          {/* You can display more movie details here */}
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
