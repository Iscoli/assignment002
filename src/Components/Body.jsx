import React from 'react';
import { useState,useEffect } from 'react';


function Body() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = 'd51ba7ba59eaefac134cd7fa1b41890a';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='main-moviecontainer'>
      <div className='movie-title'>
      <p>Top Rated Movies</p>
      <p>see more  </p>
      
      </div>
      <ul
       className='movie-list'>
        {movies.map((movie) => (
         
          <div key={movie.id} data-testid="movie-card">
          {/* Movie Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            data-testid="movie-poster"
            className='movie-img'
          />
    
          {/* Movie Title */}
          <p data-testid="movie-title">{movie.title}</p>
    
          {/* Movie Release Date */}
          <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
        </div>
        ))}
      </ul>
    </div>
  );
}

export default Body
