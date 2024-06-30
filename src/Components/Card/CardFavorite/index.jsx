import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFavorite } from '../../../redux/movies/Favorite/slice'
import { constants } from '../../../services/constants'
import styles from './CardFavorite.module.css'

const CardFavorite = ({ movie }) => {
  const dispatch = useDispatch()

  const getImages = constants.events.GET_MOVIE_IMAGES

  return (
    <div className={`${styles.card}`}>
      <img src={`${getImages}${movie.poster_path}`} alt={movie.title} />
      <div className={styles.info}>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
      <div className={styles.area_buttons}>
        <Link to={`/filme/${movie.id}`}>Detalhes</Link>
        <button onClick={() => dispatch(removeFavorite(movie.id))}>
          Remover
        </button>
      </div>
    </div>
  )
}

export default CardFavorite
