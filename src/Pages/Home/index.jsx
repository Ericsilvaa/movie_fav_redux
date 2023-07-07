import React, { useEffect, useState } from "react";

// components
import Carousel from "../../Components/Carousel";
import BannerMain from "../../Components/CardBanners/BannerMain";
// import Sessions from "../../Components/CardBanners/BannerSession";

// redux
import { useDispatch, useSelector } from "react-redux";
import { onGetMoviesPlayingNow } from "../../redux/movies/slice";

// css
import styles from "./Home.module.css";


const Home = () => {
  const dispatch = useDispatch();
  const { moviesNowPlayind, loading, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(onGetMoviesPlayingNow());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <Carousel>
          {moviesNowPlayind?.map((movie) => (
            <BannerMain movie={movie} key={movie.id} />
          ))}
        </Carousel>
      </div>
      <div style={{ backgroundColor: "#d3d3d3" }}>
        {/* <Sessions /> */}
        <p>SESSOES</p>
      </div>
    </div>
  );
};

export default Home;

// if (loading) {
//   console.log("LOGIN TRUE");
// }
// console.log("LOGIN FALSO");

// console.log(allMovies);
// setMovieNowPlaying(allMovies);

// const movieImage = dataMovies.map(
//   (eachUrl) => `${getImages}${eachUrl.backdrop_path}`
// );
