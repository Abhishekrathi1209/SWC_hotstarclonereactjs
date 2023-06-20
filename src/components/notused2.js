





// *********not used any where*************









// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../styles/ImgSlider.css"

// const ImgSlider = (slidermovies) => {
//     console.log(slidermovies)


//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//     };
//     return ( 
//         <Slider {...settings}>
//             {slidermovies.map((movie) => (
//             <div className="imgslider">
//                 <img src={movie.backgroundImg} alt={movie.title} />
//             </div>
//             ))}
//         </Slider>
//      );
// }
 
// export default ImgSlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImgSlider.css";
import { useState, useEffect } from "react";

const ImgSlider = ({ sliderimgurls }) => {

  
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

  };


  return (
    <Slider {...settings}>
        {/* {sliderimgurls.map((imageurl, index) => (
            <div key={index} className="imgslider">
                <img src={imageurl} alt={`Slide ${index + 1}`} />
            </div>
      ))} */}
            <div className="imgslider">
                <img src="image/slider-badag.jpg" alt="Image" />
            </div>
            <div className="imgslider">
                <img src="image/slider-badag.jpg" alt="Image" />
            </div>
            <div className="imgslider">
                <img src={sliderimgurls[0]} alt="Image" />
            </div>
    </Slider>
  );
};

export default ImgSlider;
