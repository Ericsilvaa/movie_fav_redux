import React, { useEffect, useMemo, useRef } from 'react'

// components
import BannerMain from '../../Components/CardBanners/BannerMain'
import Carousel from '../../Components/Carousel'
import Session from '../../Components/Session'

// redux
import { useDispatch, useSelector } from 'react-redux'
import {
  onCachedMovies,
  onGetListMoviesSession,
  selectorSessionMovies
} from '../../redux/movies/ListMoviesSession/slice'
import { onGetMoviesPlayingNow } from '../../redux/movies/PlayingNow/slice'

import { getItem, setItem } from '../../utils/localstorage'
import styles from './Home.module.css'

const STALE_TIME = 5 * 60 * 1000 // 5 minutes

const Home = () => {
  const dispatch = useDispatch()

  const { moviesNowPlayind } = useSelector((state) => state.moviesPlayingNow)
  const moviesSession = useSelector(selectorSessionMovies)

  const abortControllerRef = useRef(null)

  const storageKey = useMemo(() => {
    return 'sixtyMoviesFetch'
  }, [])

  const fetchMovies = () => {
    const currentTime = new Date().getTime()
    const cachedData = getItem(storageKey)

    if (
      cachedData &&
      cachedData.moviesSession.length > 0 &&
      currentTime - cachedData.lastFetched < STALE_TIME
    ) {
      console.log('cachedData without request', cachedData)
      onCachedMovies(cachedData.moviesSession)
      return false
    }

    return true
  }

  React.useEffect(() => {
    const isFetch = fetchMovies()

    if (isFetch) {
      abortControllerRef.current = new AbortController()

      dispatch(onGetMoviesPlayingNow())
      dispatch(onGetListMoviesSession())

      return () => {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  useEffect(() => {
    setItem(storageKey, {
      moviesSession,
      lastFetched: new Date().getTime()
    })
  }, [storageKey, moviesSession])

  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <Carousel>
          {moviesNowPlayind?.map((movie) => (
            <BannerMain movie={movie} key={movie.id} />
          ))}
        </Carousel>
      </div>
      {/* style={{ backgroundColor: "#d3d3d3" }} */}

      {/* COMPONENT SESSIONS  */}
      <div className={styles.marginToTop} />
      <div className={styles.ContainerSessions}>
        {moviesSession?.map((movies, index) => (
          <Session key={index} genreMovies={movies} />
        ))}
      </div>
    </div>
  )
}

export default Home
