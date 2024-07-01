import { useSelector } from 'react-redux'
import CardFavorite from '../../Components/Card/CardFavorite'
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
          <CardFavorite
            key={movie.id}
            movie={movie}
            // removeMovie={removeMovie}
          />
        ))}
      </div>
    </div>
  )
}

export default Favoritos
