
import MovieCards from "./MovieCards";
import useFetch from "./useFetch";

const Original = () => {
    
    const {data : movies, IsPending, error} = useFetch("http://localhost:8000/movies", "original")

    return ( 
        <div className="MovieCategory">
        <h2>Originals</h2>
        {error && <div>{ error } </div>}
        {IsPending && <div><b>Loding....</b></div>}
        {movies && <MovieCards data = {movies}/>}
      </div>

     );
}
 
export default Original;