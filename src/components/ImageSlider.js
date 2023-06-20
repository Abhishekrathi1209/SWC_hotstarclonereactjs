
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImgSlider.css";

const ImageSlider = () => {
  const [movies, setMovies] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);
  const [genremovielist, setGenremovielist] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/movies")
      .then((res) => {
        if (!res.ok) {
          throw Error("Data not found");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setIspending(false);
        setError(null);
        const {movielist, genrelist} = getmoviesgenre(data);
        console.log(movielist)
        console.log(genrelist)
        setGenremovielist(movielist)
        setGenres(genrelist)
      })
      .catch((err) => {
        setError(err.message);
        setIspending(false);
      });
  }, []);

  function getmoviesgenre(movies) {
    const genrelist = [];
    const movielist = {};

    movies.forEach((movie) => {
      const subTitleParts = movie.subTitle.split(" • ");
      const genres = subTitleParts[2].split(", ");
      const genre = genres[0];

      if (!movielist[genre]) {
        movielist[genre] = movie;
        genrelist.push(genre)
        console.log(genrelist)
      }
    });

    return {movielist, genrelist}
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {ispending && <div><b>Loading....</b></div>}
      {genres.length > 0 && (
        <Slider {...settings}>
          {genres.map((genre, index) => (
            <div key={index} className="imgslider">
              <img className="slider-image" src={genremovielist[genre].backgroundImg} alt={`Slide ${index + 1}`} />
              <img className="slider-title" src={genremovielist[genre].titleImg} alt={genremovielist[genre].title} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ImageSlider;





// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../styles/ImgSlider.css";

// const ImageSlider = () => {
//   const [movies, setMovies] = useState(null);
//   const [ispending, setIspending] = useState(true);
//   const [error, setError] = useState(null);
//   const [genremovieurls, setGenremovieurls] = useState([]);
// //   const [genremovieTitle, setGenremovieTitle] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/movies")
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("Data not found");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setMovies(data);
//         setIspending(false);
//         setError(null);
//         const urls = getmoviesgenre(data);
//         setGenremovieurls(urls);
        
//       })
//       .catch((err) => {
//         setError(err.message);
//         setIspending(false);
//       });
//   }, []);

//   function getmoviesgenre(movies) {
//     const genreUrls = [];
//     const genremovielist = {};

//     movies.forEach((movie) => {
//       const subTitleParts = movie.subTitle.split(" • ");
//       const genres = subTitleParts[2].split(", ");
//       const genre = genres[0];

//       if (!genremovielist[genre]) {
//         genreUrls.push(movie.backgroundImg);
//         genremovielist[genre] = movie;
//       }
//     });

//     return genreUrls
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   return (
//     <div>
//       {error && <div>{error}</div>}
//       {ispending && <div><b>Loading....</b></div>}
//       {genremovieurls.length > 0 && (
//         <Slider {...settings}>
//           {genremovieurls.map((imageurl, index) => (
//             <div key={index} className="imgslider">
//               <img className="slider-image" src={imageurl} alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </Slider>
//       )}
//     </div>
//   );
// };

// export default ImageSlider;






// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../styles/ImgSlider.css";

// const ImageSlider = () => {
//   const [movies, setMovies] = useState(null);
//   const [ispending, setIspending] = useState(true);
//   const [error, setError] = useState(null);
//   const genremovielist = {};
//   const genremovieurls = [];

//   useEffect(() => {
//     fetch("http://localhost:8000/movies")
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("Data nhi mila bhai");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setMovies(data);
//         setIspending(false);
//         setError(null);
//         getmoviesgenre(data);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setIspending(false);
//       });
//   }, []);

//   function getmoviesgenre(movies) {
//     movies.forEach((movie) => {
//       const subTitleParts = movie.subTitle.split(" • ");
//       const genres = subTitleParts[2].split(", ");
//       const genre = genres[0];

//       if (!genremovielist[genre]) {
//         genremovieurls.push(movie.cardImg);
//         genremovielist[genre] = movie;
//       }
//     });
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   return (
//     <div>
//       {error && <div>{error}</div>}
//       {ispending && <div><b>Loading....</b></div>}
//       {genremovieurls.length > 0 && (
//         <Slider {...settings}>
//           {genremovieurls.map((imageurl, index) => (
//             <div key={index} className="imgslider">
//               <img src={imageurl} alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </Slider>
//       )}
//     </div>
//   );
// };

// export default ImageSlider;

