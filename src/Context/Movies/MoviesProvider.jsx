import React, { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const MovieContext = createContext({});

const discoverAllMovies = import.meta.env.VITE_API_ALL_MOVIES;
const apiKey = import.meta.env.VITE_API_KEY;
const generoMovie = import.meta.env.VITE_API_GENRE_MOVIE;

const MoviesProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState();
  const [genre, setGenre] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${discoverAllMovies}${apiKey}`;
    const urlGeneroMovie = `${generoMovie}${apiKey}`;

    async function getAllMovie() {
      try {
        const responseAll = await api.get(url);
        const responseGenre = await api.get(urlGeneroMovie);

        setAllMovies(responseAll.data.results);
        setGenre(responseGenre.data.genres);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAllMovie();
  }, []);

  return (
    <MovieContext.Provider value={{ allMovies, loading, genre }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MoviesProvider;
