import "../styles/topbar.css";

const Topbar = () => {
    return ( 
        <div className="topheader">
            <img src="/image/logo.svg" alt="Disney+Logo" />
            <button className="loginbutton">Login</button>
        </div>
     );
}
 
export default Topbar;