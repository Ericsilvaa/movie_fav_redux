import { useContext } from "react";
import { MovieContext } from "../Context/Movies/MoviesProvider";



const useGetMovies = () => {
  const context = useContext(MovieContext)
  return context
}

export default useGetMovies