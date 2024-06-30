// endpoints
const apiKey = import.meta.env.VITE_API_KEY

const endpoints_api = {
  apiKey,
  allMovies: 'discover/movie?',
  generoMovie: 'genre/movie/list?',
  moviesPlayingNow: 'movie/now_playing?',
  movieID: 'movie/',
  getImages: 'https://image.tmdb.org/t/p/original',
  trendingTopics: 'trending/movie/{time_window}'
}

export const constants = {
  events: {
    GET_API_KEY: `${apiKey}`,
    GET_ALL_MOVIES: `${endpoints_api.allMovies}${apiKey}`,
    GET_MOVIES_PLAYING_NOW: `${endpoints_api.moviesPlayingNow}${apiKey}`,
    GET_MOVIE_ID: `${endpoints_api.movieID}`,
    GET_MOVIE_GENRE_ID: `${endpoints_api.generoMovie}${apiKey}`,
    GET_MOVIE_IMAGES: `${endpoints_api.getImages}`
  }
}
