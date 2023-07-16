import React, { useEffect } from "react";
import "../styles/topbar.css";
import { auth, provider } from "../auth/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { authactions } from "../store/authSlice";

const Topbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector((state)=> state.authentication.name);
    const userphoto = useSelector((state)=> state.authentication.photo);

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
                history.push("/home")
            }
        })
    },[username])


    const handleAuth = () => {
        if(!username){
            auth.signInWithPopup(provider)
            .then((result)=>{setUser(result.user)})
            .catch((error)=>{console.log(error.message)})
        }
        else if(username){
            auth.signOut().then(()=>{
                dispatch(authactions.setSignOut());
                history.push("/")
            })
        }
    }

    const setUser = (user) => {
        dispatch(authactions.setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }

    return ( 
        <div className="topheader">
            <img className="logotopbar"src="/image/logo.svg" alt="Disney+Logo" />
            {!username? (<button className="loginbutton" onClick={handleAuth}>Login</button>)
            :(<>
            <img className="useraccphoto" src={userphoto} alt={username} />
            <button className="signoutbutton" onClick={handleAuth}>SignOut</button>
            </>)}
        </div>
     );
}
 
export default Topbar;