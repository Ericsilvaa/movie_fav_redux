import React, { useEffect, useRef, useState } from "react";
import styles from "./BannerSession.module.css";
import { motion } from "framer-motion";
import api from "../../../services/api";

const moviesPlayingNow = import.meta.env.VITE_NOW_PLAYING;
const apiKey = import.meta.env.VITE_API_KEY;
const getImages = import.meta.env.VITE_IMG_MOVIE_CONCAT;

const Sessions = () => {
  const [images, setImages] = useState([]);
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  function nextStep() {
    // setDirection(1);
    // if (index === movieImageBg.length - 1) {
    //   setIndex(0);
    //   return;
    // }
    // setIndex(index + 1);
  }

  function prevStep() {
    // setDirection(-1);
    // if (index === 0) {
    //   setIndex(movieImageBg.length - 1);
    //   return;
    // }
    // setIndex(index - 1);
  }

  // useEffect(() => {
  //   console.log(carousel.current?.offsetWidth);
  //   console.log(carousel.current?.scrollWidth);
  //   setWidth(carousel.current?.offsetWidth - carousel.current?.scrollWidth);
  // }, []);

  // useEffect(() => {
  //   async function getMovieNow() {
  //     try {
  //       // setError(null);
  //       const getMovies = `${moviesPlayingNow}${apiKey}`;
  //       // const { data } = await api.get(getMovies);
  //       const { data } = await api.get(
  //         "https://api.themoviedb.org/3/discover/movie?api_key=0e005adec78746f7b1e45d5d540889e2&language=pt-BR"
  //       );

        
  //       console.log(data)
  //       // const dataMovies = data.results.slice(0, 15);
  //       // setImages(dataMovies);
  //       // setWidth(carousel.current?.offsetWidth - carousel.current?.scrollWidth);
  //       // console.log(dataMovies);
  //     } catch (error) {}
  //   }
  //   getMovieNow();
  // }, [carousel]);

  return (
    <div className={`${styles.sessions} container`}>
      <div className={styles.titleSession}>
        <h3 className="type_letter_title">NOME DO TITULO</h3>
        <span>View all</span>
      </div>
      <div className={styles.container_session}>
        <motion.div
          className={styles.carousel}
          whileTap={{ cursor: "grabbing" }}
          ref={carousel}
        >
          <motion.div
            className={styles.inner}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {images.map((image) => {
              return (
                <motion.div className={styles.item} key={image.id}>
                  <img
                    src={`${getImages}${image.poster_path}`}
                    alt="algum texto"
                  />
                  <div className={styles.description}>
                    <p>{image.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <button className={styles.prevButton} onClick={prevStep}>
          {"<"}
        </button>
        <button className={styles.nextButton} onClick={nextStep}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Sessions;
