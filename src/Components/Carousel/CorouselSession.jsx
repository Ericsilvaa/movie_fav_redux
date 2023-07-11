import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarouselSession = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default CarouselSession;

// const SampleNextArrow = ({ style, className, onClick }) => {
//   return (
//     <button
//       className={className}
//       onClick={onClick}
//       style={{ ...style, display: "block", background: "red" }}
//     />
//   );
// };
// const SamplePrevArrow = ({ style, className, onClick  }) => {
//   return (
//     <button
//       className={`${className} btn`}
//       onClick={onClick}
//       style={{ ...style, backgroundColor: "red"}}
//     />
//   );
// };