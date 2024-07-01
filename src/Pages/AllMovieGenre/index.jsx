// import styles from "./AllMovieGenre.module.css";
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardSession from '../../Components/Card/CardSession'

const AllMoviesGenre = () => {
  const { dataGenre } = useSelector((state) => state.genres)
  const { idName } = useParams()

  return (
    <div className='container '>
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
