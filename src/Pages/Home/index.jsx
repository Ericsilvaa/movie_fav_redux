import React, { useEffect, useState } from "react";

// components
import Carousel from "../../Components/Carousel";
import BannerMain from "../../Components/CardBanners/BannerMain";
// import Sessions from "../../Components/CardBanners/BannerSession";

// json
import listMovie from "../../data/listMovie.json";

// hooks
import useGetMovies from "../../Hooks/useGetMovies";
import api from "../../services/api";

// redux
import { useDispatch } from "react-redux";
import {onGetMovies} from '../../redux/movies/slice'

// css
import styles from "./Home.module.css";

// endpoints
const moviesPlayingNow = import.meta.env.VITE_NOW_PLAYING;
const apiKey = import.meta.env.VITE_API_KEY;
const getImages = import.meta.env.VITE_IMG_MOVIE_CONCAT;

const Home = () => {
  const [data, setData] = useState(listMovie ? listMovie.slice(0, 6) : []);

  const dispatch = useDispatch();

  // logica
  const { allMovies, loading } = useGetMovies();

  const [movieNowPlaying, setMovieNowPlaying] = useState([]);
  const [movieImageBg, setMovieImageBg] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (loading) {
    //   console.log("LOGIN TRUE");
    // }
    // console.log("LOGIN FALSO");

    // console.log(allMovies);
    // setMovieNowPlaying(allMovies);
    async function getMovieNowPlaying() {
      try {
        const getMovies = `${moviesPlayingNow}${apiKey}`;
        const { data } = await api.get(getMovies);
        const dataMovies = data.results.slice(0, 6);
        dispatch(onGetMovies())
        setMovieNowPlaying(dataMovies);
        
        // setMovieImageBg(movieImage);
      } catch (error) {
        console.log("bateu catch");
      }
    }
    getMovieNowPlaying();
  }, []);
  
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <Carousel>
          {movieNowPlaying?.map((movie) => (
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








// const movieImage = dataMovies.map(
//   (eachUrl) => `${getImages}${eachUrl.backdrop_path}`
// );