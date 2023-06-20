 
import MovieCards from "./MovieCards";
import useFetch from "./useFetch";

const Trending = () => {

    const {data : movies, IsPending, error} = useFetch("http://localhost:8000/movies", "trending")

    
    return ( 
        <div className="MovieCategory">
        <h2>Trending Now</h2>
        {error && <div>{ error } </div>}
        {IsPending && <div><b>Loding....</b></div>}
        {movies && <MovieCards data = {movies}/>}
      </div>

     );
}
 
export default Trending;