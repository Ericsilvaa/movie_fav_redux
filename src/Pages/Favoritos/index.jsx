import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import CardFavorite from '../../Components/Card/CardFavorite'
import EmptyStateMessage from '../../Components/EmptyStateMessage'
import styles from './Favoritos.module.css'

const Favoritos = () => {
  const { data: myFavoriteMovies } = useSelector((state) => state.favorite)

  const scrollRef = useRef()

  function scrollTo() {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  }
  useEffect(() => {
    scrollTo()
  }, [scrollTo])

  if (!myFavoriteMovies?.length) return <EmptyStateMessage />

  return (
    <>
      <h2 ref={scrollRef} className='container marginTopBody'>
        Meu Filmes
      </h2>
      <div className={`${styles.favoritos} container`}>
        {myFavoriteMovies.map((movie) => (
          <CardFavorite
            key={movie.id}
            movie={movie}
            // removeMovie={removeMovie}
          />
        ))}
      </div>
    </>
  )
}

export default Favoritos
