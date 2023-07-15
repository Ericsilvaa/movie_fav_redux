import React, { useEffect, useState } from "react";
import styles from "./CardFavorite.module.css";
import { Link } from "react-router-dom";

const CardFavorite = ({movie, removeMovie}) => {

  const getImages = import.meta.env.VITE_IMG_MOVIE_CONCAT;

  return (
    <div className={`${styles.card}`}>
      <img src={`${getImages}${movie.poster_path}`} alt={movie.title} />
      <div className={styles.info}>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
      <div className={styles.area_buttons}>
        <Link to={`/filme/${movie.id}`}>Detalhes</Link>
        <button onClick={() => removeMovie(movie.id)}>Remover</button>
      </div>
    </div>
  );
};

export default CardFavorite;
