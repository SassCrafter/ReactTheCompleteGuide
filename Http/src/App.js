import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = () => {
    setIsLoading(true);
    setError(null);

    fetch("https://swapi.dev/api/film/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong, try later");
        }
        return response.json();
      })
      .then((data) => {
        const transformedData = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            release: movieData.release_date,
            openingText: movieData.opening_crawl,
          };
        });
        console.log(transformedData);
        setMovies(transformedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <h2>Loading ...</h2>}
        {!isLoading && !error && movies.length === 0 && (
          <h2>Click button to fetch movies</h2>
        )}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && error && <h2 style={{ color: "tomato" }}>{error}</h2>}
      </section>
    </React.Fragment>
  );
}

export default App;
