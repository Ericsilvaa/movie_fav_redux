import React from 'react'

// components
import BannerMain from '../../Components/CardBanners/BannerMain'
import Carousel from '../../Components/Carousel'
import Session from '../../Components/Session'

// redux
import { useDispatch, useSelector } from 'react-redux'
import {
  onGetListMoviesSession,
  selectorSessionMovies
} from '../../redux/movies/ListMoviesSession/slice'
import { onGetMoviesPlayingNow } from '../../redux/movies/PlayingNow/slice'

// css
import styles from './Home.module.css'

const Home = () => {
  const dispatch = useDispatch()

  const { moviesNowPlayind } = useSelector((state) => state.moviesPlayingNow)
  const moviesSession = useSelector(selectorSessionMovies)
  // const  {moviesSession}  = useSelector(state => state.listMoviesSession);

  React.useEffect(() => {
    dispatch(onGetMoviesPlayingNow())
    dispatch(onGetListMoviesSession())
  }, [dispatch])

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
      {/* JA VAI RECEBER ARRAY COM TODAS AS DIVISÕES */}
      <div className={styles.ContainerSessions}>
        {moviesSession?.map((movies, index) => (
          <Session key={index} genreMovies={movies} />
        ))}
      </div>
    </div>
  )
}

export default Home
