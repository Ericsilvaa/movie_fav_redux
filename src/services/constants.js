
// endpoints
const moviesPlayingNow = import.meta.env.VITE_NOW_PLAYING;
const apiKey = import.meta.env.VITE_API_KEY;



export const constants = {
  events: {
    GET_MOVIES_PLAYING_NOW:  `${moviesPlayingNow}${apiKey}`
  }
}