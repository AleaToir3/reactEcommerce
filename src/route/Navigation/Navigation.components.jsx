import { Fragment,useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../firebase/firebase.utils";
import './navigation.styles.scss'
import CartIcon from "../../components/cart-icon.component/cart-icon.component";
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'
import { BasketContext } from "../../contexts/basket.context";

const Navigation = () =>{
const {currentUser} = useContext(UserContext);
const [basketVisibility,setBasketVisibility] = useState(false)
useEffect(() => {
}, [basketVisibility]);

const {basket} = useContext(BasketContext)

  return (
      // No difference btw <Fragment> and <>
      <Fragment>
          <div className="navigation">

              <Link to="/" className="logo-container">
                  <Logo className="logo"/>
              </Link>
              <div className="nav-links-container" >
                  <Link to="/shop" className="nav-links-container" >
                      Shop
                  </Link>
              
                  <Link to="/auth" className="nav-links-container" >
                      {currentUser ? (<span onClick={signOutUser}>Sign Out</span>):"Sign In"}
                  </Link>

                  <CartIcon setBasketVisibility={setBasketVisibility} countItem={basket.length}/>
              </div>
                  {basketVisibility && <CartDropDown />  }
          </div>
          <Outlet/>
      </Fragment>
  )
}
export default Navigation