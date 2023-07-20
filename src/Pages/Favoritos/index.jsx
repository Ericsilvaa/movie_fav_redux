import React, { useEffect, useRef, useState } from "react";
import styles from "./Favoritos.module.css";
import CardFavorite from "../../Components/Card/CardFavorite";
import { useSelector } from "react-redux";

const Favoritos = () => {
  const { data: myFavoriteMovies } = useSelector((state) => state.favorite);

  const scrollRef = useRef();


  function scrollTo() {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }
  useEffect(() => {
    scrollTo();
  }, [scrollTo]);

  if (!myFavoriteMovies?.length)
    return (
      <div
        className="container marginTopBody"
        style={{
          textAlign: "center",
          fontSize: "1.275rem",
          marginTop: "3.8rem",
        }}
      >
        {" "}
        Nenhum Filme na lista{" "}
      </div>
    );

  return (
    <>
      <h2 ref={scrollRef} className="container marginTopBody">Meu Filmes</h2>
      <div className={`${styles.favoritos} container`}>
        {myFavoriteMovies.map((movie) => (
          <CardFavorite
            key={movie.id}
            movie={movie}
            // removeMovie={removeMovie}
          />
        ))}
      </div>
    </>
  );
};

export default Favoritos;
