import { Link } from 'react-router-dom'
import styles from './Session.module.css'

import { CardDate } from '../Card/CardDate'
import { CardImage } from '../Card/CardImage'
import { CardInfo } from '../Card/CardInfo'
import { CardRoot } from '../Card/CardRoot'
import CarouselSession from '../Carousel/CorouselSession'

const Session = ({ genreMovies }) => {
  return (
    <div className={`${styles.sessions}`}>
      <div className={styles.titleSession}>
        <h3 className='type_letter_title'>{genreMovies.name}</h3>
        <Link to={`/filmes/genero/${genreMovies.name}`}>
          <span>View all</span>
        </Link>
      </div>

      {/* LOOP PASSANDO OS VALORES PARA CARD */}
      <div className={styles.boxSession}>
        <CarouselSession>
          {genreMovies.movies?.map((movie, index) => (
            <Link key={index} to={`/filme/${movie.id}`}>
              <CardRoot className='item_card'>
                <CardImage path={movie.poster_path} alt={movie.title} />
                <CardInfo title={movie.title} className='description'>
                  <p>{movie.title}</p>
                  <CardDate text={movie.release_date} className='card_date' />
                </CardInfo>
              </CardRoot>
            </Link>
          ))}
        </CarouselSession>
      </div>
    </div>
  )
}

export default Session

// CONCLUIR AS DIVISÕES DOS FILMES!!!! FAZER PRIMEIRO MOCADO, DEPOIS PARA REDUX
