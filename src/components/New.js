
import MovieCards from "./MovieCards";
import useFetch from "./useFetch";

const New = () => {

    const {data : movies, IsPending, error} = useFetch("http://localhost:8000/movies", "new")

    return ( 
        <div className="MovieCategory">
        <h2>New on Disney+ Hotstar</h2>
        {error && <div>{ error } </div>}
        {IsPending && <div><b>Loding....</b></div>}
        {movies && <MovieCards data = {movies}/>}
      </div>

     );
}
 
export default New;