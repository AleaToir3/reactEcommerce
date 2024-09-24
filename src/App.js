 
import { Routes, Route } from "react-router-dom";

import Home from "./route/HomeComponents/Home.components";
import Navigation from "./route/Navigation/Navigation.components"
import Authentification from "./route/Authentification/Authentification";
import Shop from "./components/shop/shop.components";
  
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >

        <Route path="/" element={<Home/>}/> 
        <Route path="/shop" element={<Shop/>}/> 
        
        <Route path="/auth" element={<Authentification/>}/> 
       </Route>
   </Routes>
  );
};

export default App;
