import MovieCards from "./MovieCards";
import useFetch from "./useFetch";

const Recommended = () => {

    const {data : movies, IsPending, error} = useFetch("http://localhost:8000/movies", "recommend")


    return ( 
        <div className="MovieCategory">
        <h2>Recommended for you</h2>
        {error && <div>{ error } </div>}
        {IsPending && <div><b>Loding....</b></div>}
        {movies && <MovieCards data = {movies}/>}
      </div>

     );
}
 
export default Recommended;