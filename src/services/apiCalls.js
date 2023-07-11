import {getListSixtyMovies} from './getFetchMovies'
import dataGenrer from '../data/genre.json'

export const listSession = () => {
  return getListSixtyMovies(dataGenrer)
}