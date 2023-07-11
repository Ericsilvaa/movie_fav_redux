import React, { useEffect, useState } from "react";

// components
import Carousel from "../../Components/Carousel";
import BannerMain from "../../Components/CardBanners/BannerMain";
import Session from "../../Components/Session";

// redux
import { useDispatch, useSelector } from "react-redux";
import { onGetMoviesPlayingNow } from "../../redux/movies/slice";

// css
import styles from "./Home.module.css";



import genre from '../../data/genre.json'


const Home = () => {
  const dispatch = useDispatch();
  const { moviesNowPlayind, loading, error } = useSelector(
    (state) => state.movies
  );
  

  const [genrer, setGender] = useState()


  useEffect(() => {
    dispatch(onGetMoviesPlayingNow());
    setGender(genre.slice(0,4))
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
      {/* style={{ backgroundColor: "#d3d3d3" }} */}
      
      
      {/* COMPONENT SESSIONS  */}
      {/* JA VAI RECEBER ARRAY COM TODAS AS DIVISÕES */}
      <div className={styles.ContainerSessions}>
        {genrer?.map((genreName, index) => (
          <Session key={index} generos={genreName} />
        ))}
      </div>
    
    
    </div>
  );
};

export default Home;

