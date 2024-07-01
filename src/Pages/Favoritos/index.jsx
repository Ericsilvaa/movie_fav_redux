import { useSelector } from 'react-redux'

import { CardActions } from '../../Components/Card/CardActions'
import { CardImage } from '../../Components/Card/CardImage'
import { CardInfo } from '../../Components/Card/CardInfo'
import { CardRoot } from '../../Components/Card/CardRoot'
import EmptyStateMessage from '../../Components/EmptyStateMessage'
import { Title } from '../../Components/Typography/Title'
import styles from './Favoritos.module.css'

const Favoritos = () => {
  const { data: myFavoriteMovies } = useSelector((state) => state.favorite)

  if (!myFavoriteMovies?.length) return <EmptyStateMessage />

  return (
    <div>
      <Title clasName={'container'} text={'Meu Filmes'} />
      <div className={`${styles.favoritos} container`}>
        {myFavoriteMovies.map((movie) => (
          <CardRoot className='card' key={movie.id}>
            <CardImage
              className='card_img_favorite'
              path={movie.poster_path}
              alt={movie.title}
            />
            <CardInfo className='info_favorite'>
              <Title text={movie.title} />
              <p>{movie.overview}</p>
            </CardInfo>
            <CardActions movieId={movie.id} />
          </CardRoot>
        ))}
      </div>
    </div>
  )
}

export default Favoritos
