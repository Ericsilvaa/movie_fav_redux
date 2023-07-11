import React, { useEffect, useRef, useState } from "react";
import styles from "./Session.module.css";

import CardSession from "../Card/CardSession";
import CarouselSession from "../Carousel/CorouselSession";



const Session = ( {genreMovies} ) => {

  return (
    <div className={`${styles.sessions}`}>
      <div className={styles.titleSession}>
        <h3 className="type_letter_title">{genreMovies.name}</h3>
        <span>View all</span>
      </div>

      {/* LOOP PASSANDO OS VALORES PARA CARD */}
      <div className={styles.boxSession}>
        <CarouselSession>
          {genreMovies.movies?.map((movie,index) => (
            <CardSession key={index} movie={movie} />
          ))}
        </CarouselSession>
      </div>
    </div>
  );
};

export default Session;

// CONCLUIR AS DIVISÕES DOS FILMES!!!! FAZER PRIMEIRO MOCADO, DEPOIS PARA REDUX
