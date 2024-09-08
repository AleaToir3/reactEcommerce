import { Fragment,useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../firebase/firebase.utils";
import { collectionGroup } from "firebase/firestore";

const Navigation = () =>{
const {setCurrentUser,currentUser} = useContext(UserContext) 
const handlerUser = async ()=>{
    await signOutUser();
    setCurrentUser(null)
}
     return (
        // No difference btw <Fragment> and <>
        <Fragment>
            <div className="navigation">

            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <Link to="/shop" className="nav-links-container" >
                Shop
            </Link>
        
            <Link to="/auth" className="nav-links-container" >
                {currentUser ? (<span onClick={handlerUser}>Sign Out</span>):"Sign In"}
            </Link>
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation