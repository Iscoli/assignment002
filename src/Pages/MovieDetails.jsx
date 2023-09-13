import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const params = useParams();
  const param = params.id;

  useEffect(() => {
    setLoading(true); // Start loading
    setError(null); // Clear previous errors

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "d51ba7ba59eaefac134cd7fa1b41890a",
          language: "en-US",
          query: param,
          page: 1,
        },
      })
      .then((response) => {
        // Filter out movie objects without a poster_path
        const filteredResults = response.data.results.filter(
          (movie) => movie.poster_path
        );
        setData(filteredResults);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setError(error); // Set error state in case of an error
        setLoading(false); // Set loading to false on error
      });
  }, [param]);

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
                <div key={movieDetails.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    data-testid="movie-poster"
                    className='movie-img'
                  />
                  <h2 data-testid="movie-title">{movieDetails.original_title}</h2>
                  <p data-testid="movie-release-date">{movieDetails.release_date}</p>
                  <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
                  <p data-testid="movie-overview">{movieDetails.overview}</p>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default MovieDetails;
