// styles
import { Link } from 'react-router-dom'
import { constants } from '../../../services/constants'
import styles from './CardSession.module.css'

const getImages = constants.events.GET_MOVIE_IMAGES

const CardSession = ({ movie }) => {
  return (
    <Link to={`/filme/${movie.id}`}>
      <div className={styles.item_card} key={movie.id}>
        <img src={`${getImages}${movie.poster_path}`} alt='algum texto' />
        <div className={styles.description}>
          <p>{movie.title}</p>
          <span>{movie.release_date}</span>
        </div>
      </div>
    </Link>
  )
}

export default CardSession
