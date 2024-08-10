import React, { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CardImage } from '../../Components/Card/CardImage'
import { CardInfo } from '../../Components/Card/CardInfo'
import { CardRoot } from '../../Components/Card/CardRoot'
import { onGetMoviesByGenre } from '../../redux/movies/Genre/slice'
import { getItem, setItem } from '../../utils/localstorage'
const STALE_TIME = 5 * 60 * 1000 // 5 minutes

const AllMoviesGenre = () => {
  const { dataGenre } = useSelector((state) => state.genres)
  const { idName } = useParams()

  const dispatch = useDispatch()

  const abortControllerRef = useRef(null)

  const storageKey = useMemo(() => {
    return `cachedData-${idName}`
  }, [idName])

  const fetchMoviesGenrer = () => {
    const currentTime = new Date().getTime()
    const cachedData = getItem(storageKey)

    if (
      cachedData &&
      cachedData.data.length > 0 &&
      currentTime - cachedData.lastFetched < STALE_TIME
    ) {
      console.log('cachedData without request', cachedData)
      onGetMoviesByGenre(cachedData.moviesSession)
      return false
    }

    return true
  }

  React.useEffect(() => {
    const isFetch = fetchMoviesGenrer()

    if (isFetch) {
      abortControllerRef.current = new AbortController()
      dispatch(onGetMoviesByGenre(idName))

      return () => {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  useEffect(() => {
    setItem(storageKey, {
      data: dataGenre,
      lastFetched: new Date().getTime()
    })
  }, [storageKey, dataGenre])

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
          <CardRoot key={movie.id} className='item_card'>
            <CardImage path={movie.poster_path} alt={movie.title} />
            <CardInfo title={movie.title} className='description'>
              <p>{movie.title}</p>
            </CardInfo>
          </CardRoot>
        ))}
      </div>
    </div>
  )
}

export default AllMoviesGenre
