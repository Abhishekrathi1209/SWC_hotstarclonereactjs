import { useSelector } from "react-redux";
import FavMovieCards from "./FavMovieCards";

const FavMovie = () => {
    const favmovieslist = useSelector((state) => state.favourite.favmovielist)

    return ( 
        <div className="MovieCategory">
            <h2>Favourite Movies</h2>
            {favmovieslist && <FavMovieCards data = {favmovieslist}/>}
        </div>
     );
}
 
export default FavMovie;