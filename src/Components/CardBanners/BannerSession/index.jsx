import React, { useEffect, useRef, useState } from "react";
import styles from "./BannerSession.module.css";
import api from "../../../services/api";

const moviesPlayingNow = import.meta.env.VITE_NOW_PLAYING;
const apiKey = import.meta.env.VITE_API_KEY;
const getImages = import.meta.env.VITE_IMG_MOVIE_CONCAT;

const Sessions = ({generos}) => {
  const [images, setImages] = useState([]);


  useEffect(() => {
    async function getMovieNow() {
      try {
        // setError(null);
        const getMovies = `${moviesPlayingNow}${apiKey}`;
        // const { data } = await api.get(getMovies)
        const { data } = await api.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=0e005adec78746f7b1e45d5d540889e2&language=pt-BR"
        );
        const dataMovies = data.results.slice(0, 13);
        setImages(dataMovies);
      } catch (error) {}
    }
    getMovieNow();
  }, []);

  return (
    <div className={`${styles.sessions}`}>
      <div className={styles.titleSession}>
        <h3 className="type_letter_title">{generos.name}</h3>
        <span>View all</span>
      </div>
      <div className={styles.container_session}>
        <div className={styles.boxSession}>ALGUMA COISA</div>
            {/* {images.map((image) => {
              return (
                <div className={styles.item} key={image.id}>
                  <img
                    src={`${getImages}${image.poster_path}`}
                    alt="algum texto"
                  />
                  <div className={styles.description}>
                    <p>{image.title}</p>
                  </div>
                </div>
              );
            })} */}
          
      </div>
    </div>
  );
};

export default Sessions;




// CONCLUIR AS DIVISÕES DOS FILMES!!!! FAZER PRIMEIRO MOCADO, DEPOIS PARA REDUX