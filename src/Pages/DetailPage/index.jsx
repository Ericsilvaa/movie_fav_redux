import React, { useCallback, useEffect, useState } from "react";
import styles from "./DetailPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onGetMovieById, onResetMovieId } from "../../redux/movies/MovieById/slice";

const getImages = import.meta.env.VITE_IMG_MOVIE_CONCAT;

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieID: moviesSelected } = useSelector((state) => state.movieId);
  const navigate = useNavigate()

  // const backHome = useCallback(
  //   function () {
  //     dispatch(onResetMovieId())
  //     navigate('/', {replace: true})
  //   }, [navigate]
  // )
  // caso de filme não encontrado....



  useEffect(() => {
    dispatch(onGetMovieById(id));
  }, [id]);

  if (!moviesSelected) return <div>Carregando...</div>;

  return (
    <div className={styles.movie_info}>
      <h2>{moviesSelected.title}</h2>
      <img
        src={`${getImages}${moviesSelected.backdrop_path}`}
        alt={moviesSelected.title}
      />
      <h3>Sinopse</h3>
      <span>{moviesSelected.overview}</span>

      <strong>Avaliação: {moviesSelected.vote_average?.toFixed(1)} / 10</strong>

      <div className={styles.area_buttons}>
        <button>Salvar</button>
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
