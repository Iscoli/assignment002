import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import axios from 'axios';

function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const location = useLocation(); // Get the current location

  const searchQuery = new URLSearchParams(location.search).get('query');
  
  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "d51ba7ba59eaefac134cd7fa1b41890a",
          language: "en-US",
          query: searchQuery,
          page: 1,
        },
      })
      .then((response) => {
        const filteredResults = response.data.results.filter(
          (movie) => movie.poster_path
        );
        setData(filteredResults);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setError(error);
        setLoading(false);
      });
  }, [searchQuery]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <>
          {data.length === 0 ? (
            <p>No results found</p>
          ) : (
            <>
              {data.map((movieDetails) => (
                <Link key={movieDetails.id}
                 style={{ textDecoration: 'none', // Remove text decoration
                 color: 'inherit', }}
                to={`/movies/${movieDetails.id}`}> {/* Wrap the image in a Link */}
                  <div className='search-details'>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                      alt={movieDetails.title}
                      data-testid="movie-poster"
                      className='search-img'
                    />
                    <h2 data-testid="movie-title">{movieDetails.original_title}</h2>
                    <p data-testid="movie-release-date">Released Date: {movieDetails.release_date}</p>
                    <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
                    <p style={{ padding: '20px 40px' }} data-testid="movie-overview">{movieDetails.overview}</p>
                  </div>
                </Link>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default MovieDetails;
