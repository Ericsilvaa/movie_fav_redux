import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./DetailPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  onGetMovieById,
  onResetMovieId,
} from "../../redux/movies/MovieById/slice";
import {addMovieFavorite} from '../../redux/movies/Favorite/slice'

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



  useEffect(() => {
    dispatch(onGetMovieById(id));
    scrollTo();
  }, [id]);

  if (!moviesSelected) return <div>Carregando...</div>;

  return (
    <div ref={scrollRef} className={`${styles.movie_info} `}>
      <h2>{moviesSelected.title}</h2>
      <img
        src={`${getImages}${moviesSelected.backdrop_path}`}
        alt={moviesSelected.title}
      />
      <h3>Sinopse</h3>
      <span>{moviesSelected.overview}</span>

      <strong>Avaliação: {moviesSelected.vote_average?.toFixed(1)} / 10</strong>

      <div className={styles.area_buttons}>
        <button onClick={() => dispatch(addMovieFavorite(moviesSelected))}>Salvar</button>
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
