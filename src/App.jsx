import React, { useEffect, useState } from "react";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2926ec03";

const movie1 = {
  Title: "Spiderman",
  Year: "2010",
  imdbID: "tt1785572",
  Type: "movie",
  Poster: "N/A",
};

import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&S=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found Or start searching the movie</h2>
        </div>
      )}
    </div>
  );
};

export default App;
