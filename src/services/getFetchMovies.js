import api from "./api";


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
  const session = genres.map((key) => {
    return {
      ...key,
      movies: movies.filter((movie) => movie.genre_ids.includes(key.id)),
    };
  });

  return session.filter(({ movies }) => movies.length >= 15);
};
