import React from "react";

// styles
import styles from "./CardSession.module.css";
import { Link } from "react-router-dom";

const getImages = import.meta.env.VITE_IMG_MOVIE_CONCAT;

const CardSession = ({ movie }) => {
  console.log(movie);
  return (
    <Link to={`filme/${movie.id}`}>
      <div className={styles.item_card} key={movie.id}>
        <img src={`${getImages}${movie.poster_path}`} alt="algum texto" />
        <div className={styles.description}>
          <p>{movie.title}</p>
          <span>{movie.release_date}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardSession;
