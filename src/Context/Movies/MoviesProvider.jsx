import { createContext, useEffect, useState } from 'react'
import api from '../../services/api'
import { constants } from '../../services/constants'

// criando contexto
export const MovieContext = createContext({})

// endpoints
const apiKey = constants.events.GET_API_KEY
const discoverAllMovies = constants.events.GET_ALL_MOVIES
const generoMovie = constants.events.GET_MOVIE_GENRE_ID

const MoviesProvider = ({ children }) => {
  // state management
  const [allMovies, setAllMovies] = useState()
  const [genre, setGenre] = useState()

  // loading and errors
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // urls
    const url = `${discoverAllMovies}${apiKey}`
    const urlGeneroMovie = `${generoMovie}${apiKey}`

    async function getAllMovie() {
      try {
        // reqs a API
        const responseAll = await api.get(url)
        const responseGenre = await api.get(urlGeneroMovie)

        setAllMovies(responseAll.data.results)
        setGenre(responseGenre.data.genres)

        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getAllMovie()
  }, [])

  return (
    <MovieContext.Provider value={{ allMovies, loading, genre }}>
      {children}
    </MovieContext.Provider>
  )
}

export default MoviesProvider
