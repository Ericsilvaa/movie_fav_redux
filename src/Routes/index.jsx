import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Home from '../Pages/Home'
import Favoritos from '../Pages/Favoritos'
import MovieDetail from '../Pages/DetailPage'
import NotFound from '../Components/NotFound'
import AllMoviesGenre from '../Pages/AllMovieGenre'



const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favoritos' element={<Favoritos />} />
      <Route path='/filme/:id' element={<MovieDetail />} />
      <Route path='/filmes/genero/:idName' element={<AllMoviesGenre />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp