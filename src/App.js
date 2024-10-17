 
import { Routes, Route } from "react-router-dom";

import Home from "./route/HomeComponents/Home.components";
import Navigation from "./route/Navigation/Navigation.components"
import Authentification from "./route/Authentification/Authentification";
import Checkout from "./route/Checkout/Checkout";
import Shop from "./route/shop/Shop";
   
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >

        <Route path="/" element={<Home/>}/> 
        <Route path="shop/*" element={<Shop/>}/> 
        
        <Route path="auth" element={<Authentification/>}/> 
        <Route path="checkout" element={<Checkout />}/>

      </Route>
   </Routes>
  );
};

export default App;
