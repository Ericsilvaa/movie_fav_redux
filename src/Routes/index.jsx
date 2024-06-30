import { Route, Routes } from 'react-router-dom'
import WithLazyLoad from './lazyload'
import { path } from './paths'

const LazyHome = WithLazyLoad(() => import('../Pages/Home'))
const LazyAllMoviesGenre = WithLazyLoad(() => import('../Pages/AllMovieGenre'))
const LazyFavorites = WithLazyLoad(() => import('../Pages/Favoritos'))
const LazyDetails = WithLazyLoad(() => import('../Pages/DetailPage'))
const LazyNotFound = WithLazyLoad(() => import('../Components/NotFound'))

const RoutesApp = () => {
  return (
    <Routes>
      <Route path={path.home} element={<LazyHome />} />
      <Route path={path.filme.movieId} element={<LazyDetails />} />
      <Route path={path.filme.genrer} element={<LazyAllMoviesGenre />} />
      <Route path={path.filme.favorites} element={<LazyFavorites />} />
      <Route path='*' element={<LazyNotFound />} />
    </Routes>
  )
}

export default RoutesApp
