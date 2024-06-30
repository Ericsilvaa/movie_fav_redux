import { useEffect, useRef } from 'react'
// import styles from "./AllMovieGenre.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardSession from '../../Components/Card/CardSession'
import { onGetMoviesByGenre } from '../../redux/movies/Genre/slice'

const AllMoviesGenre = () => {
  const { dataGenre, loading, error } = useSelector((state) => state.genres)
  const { idName } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onGetMoviesByGenre(idName))
    scrollTo()
    return (
      // cleanup
      () => {}
    )
  }, [idName, dispatch])

  const scrollRef = useRef()

  function scrollTo() {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  }

  return (
    <div className='container marginTopBody' ref={scrollRef}>
      <h2 style={{ margin: '40px 0px 20px 0px' }}>{idName}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          justifyContent: 'space-around',
          justifyItems: 'center',
          gap: '50px 10px'
        }}
      >
        {dataGenre?.map((movie) => (
          <CardSession key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default AllMoviesGenre
