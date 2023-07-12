import api from "./api";
import { constants } from "./constants";

export const getListSixtyMovies = async (dataGenre) => {
  const sixtyMovies = [];
  const pages = [1, 2, 3];
  await Promise.all(
    pages.map(async (page) => {
      const { data } = await api.get(
        `discover/movie?api_key=0e005adec78746f7b1e45d5d540889e2&language=pt-BR&page=${page}`
      );
      sixtyMovies.push(...data.results);
    })
  );
  
  // chama função que faz a divisão dos filmes.
  return dividingSession(sixtyMovies, dataGenre);
};

const dividingSession = (movies, genres) => {
  const session = genres
    .map((key) => {
      return {
        ...key,
        movies: movies.filter((movie) => movie.genre_ids.includes(key.id)),
      };
    })
    .filter(({ movies }) => movies.length >= 13);

  return session;
};



export const getListMoviesPlayingNow = async  () =>  {
  const {data} = await api.get(`${constants.events.GET_MOVIES_PLAYING_NOW}`)


  return data.results
}


export const getMovieById = async (id) => {
  const { data } = await api.get(`${constants.events.GET_MOVIE_ID}${id}?${constants.events.GET_API_KEY}`);

  return data;
}