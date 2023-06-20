import "../styles/MoviePage.css"

const MoviePageinfo = ({movie}) => {


    return ( 
        <div className="moviepage">
            <div className="moviebackdrop">
                <img src={movie.backgroundImg} alt={movie.title} />
            </div>
            <div className="moviepagecontent">
                <div className="moviepagelogo">
                    <img src={movie.titleImg} alt={movie.title} />
                </div>
                <div className="moviepagecontrols">
                    <button id="playbutton"><img src="/image/play-icon-black.png" alt="PLAY" /><span>PLAY</span></button>
                    <button id="trailerbutton"><img src="/image/play-icon-black.png" alt="TRAILER" /><span>TRAILER</span></button>
                </div>
                <div className="moviepagedetails">
                    <span>{movie.subTitle}</span>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default MoviePageinfo;