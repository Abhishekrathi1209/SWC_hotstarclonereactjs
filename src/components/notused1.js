


// *********not used any where*************






import { useState, useEffect } from "react";
import ImgSlider from "./notused2";

const Slidercomponent = () => {

    const [movies, setMovies] = useState(null);
    const [ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);
    const genremovielist = {};
    let genremovieurls = [];



    useEffect(() => {
        fetch("http://localhost:8000/movies")
          .then((res) => {
            if (!res.ok) {
              throw Error("Data nhi mila bhai");
            }
            return res.json();
          })
          .then((data) => {
            setMovies(data);
            setIspending(false);
            setError(null);
            // console.log('calling')
            getmoviesgenre(data);
          })
          .catch((err) => {
            setError(err.message);
            setIspending(false);
          });
          // eslint-disable-next-line
      }, []);

function getmoviesgenre(movies) 
{    movies.forEach(movie => {
        const subTitleParts = movie.subTitle.split(' • ');

        const genres = subTitleParts[2].split(', ')

        const genre = genres['0']
        // const releaseYear = subTitleParts[0]

        if(!genremovielist[genre]){
          genremovieurls.push(movie.cardImg)
          genremovielist[genre] = movie;
        }
    });
  }

    
    return ( 
        <div>
          { error && <div>{ error } </div> }
          { ispending && <div><b>Loding....</b></div> }
          { genremovielist && <ImgSlider sliderimgurls={genremovieurls}/> }
        </div>
    );
}
 
export default Slidercomponent;




// // Assuming your movie database is stored in the `movies` array

// // Step 1: Initialize the `genremovielist` object
// const genremovielist = {};

// // Step 2: Iterate over each movie object
// movies.forEach(movie => {
//   // Step 3: Split the `subTitle` string by the dot (.) character
//   const subTitleParts = movie.subTitle.split(' • ');

//   // Step 4: Split the genre string by the comma (,) character
//   const genres = subTitleParts[2].split(', ');

//   genres.forEach(genre => {
//     // Step 5: Check if the genre already exists in `genremovielist`
//     if (!genremovielist[genre] || movie.releaseYear > genremovielist[genre].releaseYear) {
//       // If the genre doesn't exist or the current movie is newer, update the entry in `genremovielist`
//       genremovielist[genre] = movie;
//     }
//   });
// });

// // `genremovielist` will contain the latest film for each genre
// console.log(genremovielist);