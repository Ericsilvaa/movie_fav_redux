
// endpoints
const apiKey = import.meta.env.VITE_API_KEY;
const allMovies = import.meta.env.VITE_API_ALL_MOVIES
const moviesPlayingNow = import.meta.env.VITE_NOW_PLAYING;
const movieID = import.meta.env.VITE_GET_MOVIE_ID



export const constants = {
  events: {
    GET_API_KEY: `${apiKey}`,
    GET_ALL_MOVIES: `${allMovies}${apiKey}`,
    GET_MOVIES_PLAYING_NOW: `${moviesPlayingNow}${apiKey}`,
    GET_MOVIE_ID: `${movieID}`
  }
}