import { useState, useEffect } from "react";
import "../styles/MoviePage.css"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MoviePageinfo from "./MoviePageInfo";

const MoviePgae = () => {

    const { id } = useParams()

    const [movie, setMovie] = useState(null);
    const [ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/movies/" + id)
          .then((res) => {
            if (!res.ok) {
              throw Error("Data nhi mila bhai");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMovie(data);
            setIspending(false);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setIspending(false);
          });
      }, [id]);

    return (
        <div>
            {error && <div>{ error } </div>}
            {ispending && <div><b>Loding....</b></div>}
            {movie && <MoviePageinfo movie={movie}/>}
        </div>
     );
}
 
export default MoviePgae;