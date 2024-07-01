import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFavorite } from '../../redux/movies/Favorite/slice'
import CustomButton from '../Button/Button'
import styles from './Card.module.css'

export const CardActions = ({ movieId }) => {
  const dispatch = useDispatch()

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(movieId))
  }

  return (
    <div className={styles.area_buttons}>
      <Link to={`/filme/${movieId}`}>Detalhes</Link>
      <CustomButton onClick={handleRemoveFavorite}>Remover</CustomButton>
    </div>
  )
}
