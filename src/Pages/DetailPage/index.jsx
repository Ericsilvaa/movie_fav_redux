import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./DetailPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  onGetMovieById,
  onResetMovieId,
} from "../../redux/movies/MovieById/slice";

const getImages = import.meta.env.VITE_IMG_MOVIE_CONCAT;

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieID: moviesSelected } = useSelector((state) => state.movieId);
  // const navigate = useNavigate();

  // const backHome = useCallback(
  //   function () {
  //     dispatch(onResetMovieId())
  //     navigate('/', {replace: true})
  //   }, [navigate]
  // )
  // caso de filme não encontrado....

  const scrollRef = useRef();

  function scrollTo() {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }

  function favorite(movie) {
    // chamar um dispatch() -> ir no local / adicionar no local.
    const getMoviesFavorites = localStorage.getItem("myFavoriteMovies");

    let moviesSaved = JSON.parse(getMoviesFavorites) || [];

    const hasFilme = moviesSaved.some(
      (movieSaved) => movieSaved.id === movie.id
    );
    if (hasFilme) {
      return alert(`O Filme ${movie.title} já está salvo na sua lista.`);
    }

    moviesSaved.push(movie);
    localStorage.setItem("myFavoriteMovies", JSON.stringify(moviesSaved));
    alert(`O Filme ${movie.title} já está salvo na sua lista.`);

  }

  useEffect(() => {
    dispatch(onGetMovieById(id));
    scrollTo();
  }, [id]);

  if (!moviesSelected) return <div>Carregando...</div>;

  return (
    <div ref={scrollRef} className={styles.movie_info}>
      <h2>{moviesSelected.title}</h2>
      <img
        src={`${getImages}${moviesSelected.backdrop_path}`}
        alt={moviesSelected.title}
      />
      <h3>Sinopse</h3>
      <span>{moviesSelected.overview}</span>

      <strong>Avaliação: {moviesSelected.vote_average?.toFixed(1)} / 10</strong>

      <div className={styles.area_buttons}>
        <button onClick={() => favorite(moviesSelected)}>Salvar</button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${moviesSelected.title} Trailer`}
            target="_blank"
            rel="external"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
