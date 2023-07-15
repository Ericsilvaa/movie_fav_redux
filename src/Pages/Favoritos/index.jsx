import React, { useEffect, useState } from "react";
import styles from "./Favoritos.module.css";
import CardFavorite from "../../Components/Card/CardFavorite";
import { useSelector } from "react-redux";

const Favoritos = () => {
  const [myFavoriteMovies, setMyFavoriteMovies] = useState();

  // const [movies, setMovies] = useState();


  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("myFavoriteMovies"));
    if (!favoriteMovies.length) return setMyFavoriteMovies([]);
    setMyFavoriteMovies(favoriteMovies);
  }, []);

  function removeMovie(id) {
    let newArray = myFavoriteMovies.filter((movieRemove) => movieRemove.id !== id);
    localStorage.setItem("myFavoriteMovies", JSON.stringify(newArray));
    console.log(newArray)
    setMyFavoriteMovies(newArray);
    alert(`O Filme foi removido de sua lista.`);

  }

  if (!myFavoriteMovies?.length)
    return <div className="container"> Nenhum Filme na lista </div>;

  return (
    <>
      <h2 className="container">Meu Filmes</h2>
      <div className={`${styles.favoritos} container`}>
        {myFavoriteMovies.map((movie) => (
          <CardFavorite
            key={movie.id}
            movie={movie}
            removeMovie={removeMovie}
          />
        ))}
      </div>
    </>
  );
};

export default Favoritos;
