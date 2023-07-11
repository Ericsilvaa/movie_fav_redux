
// endpoints
const apiKey = import.meta.env.VITE_API_KEY;
const moviesPlayingNow = import.meta.env.VITE_NOW_PLAYING;
const allMovies = import.meta.env.VITE_API_ALL_MOVIES



export const constants = {
  events: {
    GET_ALL_MOVIES: `${allMovies}${apiKey}`,
    GET_MOVIES_PLAYING_NOW:  `${moviesPlayingNow}${apiKey}`
  }
}