import "../styles/MovieCards.css"
import { useDispatch } from "react-redux"
import { favactions } from "../store/FavSlice";
import { Link } from "react-router-dom/cjs/react-router-dom";


const MovieCards = (props) => {
    const movies = props.data;
    const dispatch = useDispatch()

    const removefromfav = (movie) => {
      dispatch(favactions.removefromfav(movie));
    }

    return ( 
        <div className="moviecard-container">
            {movies.map((movie) => (
              <div className="moviecard" key={movie.id}>
                <Link to = {`/home/movie/${movie.id}/${movie.type}/${movie.title}`}>
                <img src={movie.cardImg} alt={movie.title} />
                </Link>
                <button className="removefromfav" onClick={() => removefromfav(movie)}>Remove Favourite</button>
              </div>
            ))}
        </div>
     );
}
 
export default MovieCards;