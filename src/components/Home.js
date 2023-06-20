import Homesidebar from "./Homesidebar";
import Recommended from "./Recommended";
import Trending from "./Trending";
import New from "./New";
import Original from "./Orignal";
import Footer from "./Footer";
import FavMovie from "./FavMovie";
import "../styles/Homebackimg.css";
import { useSelector } from "react-redux";
import Viewerscards from "./Viewerscards";
import ImageSlider from "./ImageSlider";


const Home = () => {

    const favmovieslist = useSelector((state) => state.favourite.favmovielist)
    
    return ( 
        <div className="homepage">
            <div className="homepagebackground">
                <img src="image/home-background.png" alt="Disney+" />
            </div>

            <Homesidebar />

            <ImageSlider />

            <Viewerscards />

            {favmovieslist.length > 0 && <FavMovie />}

            <Recommended />

            <Trending />

            <New />

            <Original />

            <Footer />
            
        </div>
     );
}
 
export default Home;