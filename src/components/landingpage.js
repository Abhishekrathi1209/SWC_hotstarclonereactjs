import "../styles/landingpage.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Explorepage = () => {
    return ( 
    <div className="explore">

        <div className="backimage">
            <img src="image/backgroundlanding.jpeg" alt="BackImage" />
        </div>
        
        <div className="explorecontent">
            <ul>
                <li><img src="image/logo1.svg" alt="Logo" id="logo1"/></li>
                <li><Link to = '/home'><button id="explorebutton"><b>Explore</b></button></Link></li>
                <li id="text"><p>Get Premier Access to Lorem ipsum dolor for an additional fee with a Disney+ subscription. As of 06/30/23, the price of Disney+ and The Disney Bundle will increase by $1 million.</p></li>
                <li><img src="image/logo-two.png" alt="Logo" id="logo2"/></li>
            </ul>
        </div>
    </div>
     );
}
 
export default Explorepage;