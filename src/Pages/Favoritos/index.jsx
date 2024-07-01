import { useSelector } from 'react-redux'
import { CardActions } from '../../Components/Card/CardFavorite/CardActions'
import { CardImage } from '../../Components/Card/CardFavorite/CardImage'
import { CardInfo } from '../../Components/Card/CardFavorite/CardInfo'
import { CardRoot } from '../../Components/Card/CardFavorite/CardRoot'
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
          <CardRoot key={movie.id}>
            <CardImage path={movie.poster_path} alt={movie.title} />
            <CardInfo title={movie.title} description={movie.overview} />
            <CardActions movieId={movie.id} />
          </CardRoot>
        ))}
      </div>
    </div>
  )
}

export default Favoritos
