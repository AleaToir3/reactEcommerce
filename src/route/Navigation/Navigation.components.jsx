import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './navigation.styles.scss'

const Navigation = () =>{

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

            <Link to="/signIn" className="nav-links-container" >
                Sign-In
            </Link>
            
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation