import React, { useEffect, useRef, useState } from "react";
import styles from "./Session.module.css";



import listMovie from '../../data/listMovie.json'



import CardSession from "../Card/CardSession";
import CarouselSession from "../Carousel/CorouselSession";

// const moviesPlayingNow = import.meta.env.VITE_NOW_PLAYING;
// const apiKey = import.meta.env.VITE_API_KEY;
// const getImages = import.meta.env.VITE_IMG_MOVIE_CONCAT;

const Session = ({ generos }) => {


  return (
    <div className={`${styles.sessions}`}>
      <div className={styles.titleSession}>
        <h3 className="type_letter_title">{generos.name}</h3>
        <span>View all</span>
      </div>

      {/* LOOP PASSANDO OS VALORES PARA CARD */}
      <div className={styles.boxSession}>
        <CarouselSession>
          {listMovie?.map((movie,index) => (
            <CardSession key={index} movie={movie} />
          ))}
        </CarouselSession>
      </div>
    </div>
  );
};

export default Session;

// CONCLUIR AS DIVISÕES DOS FILMES!!!! FAZER PRIMEIRO MOCADO, DEPOIS PARA REDUX
