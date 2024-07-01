import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CustomButton from '../../Components/Button/Button'
import { Title } from '../../Components/Typography/Title'
import { addMovieFavorite } from '../../redux/movies/Favorite/slice'
import { onGetMovieById } from '../../redux/movies/MovieById/slice'
import { constants } from '../../services/constants'
import styles from './DetailPage.module.css'

const getImages = constants.events.GET_MOVIE_IMAGES

const MovieDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { movieID: moviesSelected } = useSelector((state) => state.movieId)

  const handleAddFavorite = () => {
    dispatch(addMovieFavorite(moviesSelected))
  }

  React.useEffect(() => {
    dispatch(onGetMovieById(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (!moviesSelected) return <div>Carregando...</div>

  return (
    <div className={`${styles.movie_info} `}>
      <Title text={moviesSelected.title} />
      <img
        src={`${getImages}${moviesSelected.backdrop_path}`}
        alt={moviesSelected.title}
      />
      <h3>Sinopse</h3>
      <span>{moviesSelected.overview}</span>
      <strong>Avaliação: {moviesSelected.vote_average?.toFixed(1)} / 10</strong>
      <div className={styles.area_buttons}>
        <CustomButton onClick={handleAddFavorite}>Salvar</CustomButton>
        <CustomButton>
          <a
            href={`https://youtube.com/results?search_query=${moviesSelected.title} Trailer`}
            target='_blank'
            rel='external noreferrer'
          >
            Trailer
          </a>
        </CustomButton>
      </div>
    </div>
  )
}

export default MovieDetail
