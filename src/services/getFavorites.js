import { toast } from "react-toastify";

// FUNCTION LOCALSTORAGE
export const getMovieLocalStorage = () => {
  return JSON.parse(localStorage.getItem("myFavoriteMovies")) || [];
};

// FUNCTION ADD
export const addMovieFavorite = (list, movie) => {
  const newListMovies = [];
  const hasMovie = list.some((movieSaved) => movieSaved.id === movie.id);

  if (hasMovie) {
    toast.warning("Este filme já está salvo!", {
      theme: "colored",
    });
    return list
  }

  newListMovies.push(...list, movie);
  localStorage.setItem("myFavoriteMovies", JSON.stringify(newListMovies));
  toast.success("Filme Salvo!", {
    theme: "colored",
  });

  return newListMovies;
};

// FUNCTION REMOVER
export const removeFavorite = (list, id) => {
  let newArray = list.filter((movieRemove) => movieRemove.id !== id);
  localStorage.setItem("myFavoriteMovies", JSON.stringify(newArray));
  toast.error("Filme Removido!", {
    theme: "colored",
  });
  return newArray
};
