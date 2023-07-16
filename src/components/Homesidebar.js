import "../styles/Homesidebar.css";

const Homesidebar = () => {

    return ( 
        <div className="homepagesidebar">
                {/* <div >
                    
                </div> */}
                    {/* <img src="image/logo-d+h.svg" alt="search" className="sidebarlogo"/> */}
                    <ul className="sidebaricons">
                        <li><button><img src="image/search-icon.svg" alt="search" /></button></li>
                        <li><button><img src="image/home-icon.svg" alt="home" /></button></li>
                        <li><button><img src="image/series-icon.svg" alt="series" /></button></li>
                        <li><button><img src="image/movie-icon.svg" alt="movie" /></button></li>
                        <li><button><img src="image/original-icon.svg" alt="original" /></button></li>
                    </ul>
            </div>
     );
}
 
export default Homesidebar;