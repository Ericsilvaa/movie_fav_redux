import React from "react";

import styles from "./BannerMain.module.css";

// endpoints API
const getImages = import.meta.env.VITE_IMG_MOVIE_CONCAT;


const BannerMain = ({ movie, key }) => {
  return (
    <div className={styles.slideshow}>
      <div className={styles.description}>
        <p className={styles.titulo}>{movie.title}</p>
        <span className={styles.overview}>{movie.overview}</span>
      </div>
      <div className={styles.slides}>
        <div style={{
          zIndex: '0',
          width:'100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundRepeat:'no-repeat',
          backgroundImage: `url(${getImages}${movie.backdrop_path})`}}></div>
      </div>
    </div>
  );
};

export default BannerMain;
