// FUNCTION LOCALSTORAGE
export const getMovieLocalStorage = () => {
  return JSON.parse(localStorage.getItem("myFavoriteMovies")) || [];
};



// FUNCTION ADD
export const addMovieFavorite = (list, movie) => {

  const newListMovies = []
  const hasMovie = list.some((movieSaved) => movieSaved.id === movie.id);

  if (hasMovie) {
    alert("Filmes já esta na sua listagem!");
    return;
  }

  newListMovies.push(...list, movie);
  localStorage.setItem("myFavoriteMovies", JSON.stringify(newListMovies));
  alert("Filme adicionado na sua listagem!");
  return newListMovies
};



// FUNCTION REMOVER
export const removeFavorite = (list, id) => {
  let newArray = list.filter((movieRemove) => movieRemove.id !== id);
  localStorage.setItem("myFavoriteMovies", JSON.stringify(newArray));
  alert(`O Filme foi removido de sua lista.`);
  return newArray
}
