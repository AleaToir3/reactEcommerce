 
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./route/HomeComponents/Home.components";
import Navigation from "./route/Navigation/Navigation.components"
 
 
const Shop = () => {
    return (
        <h1>SHOP</h1>
    )
}
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route path="/" element={<Home/>}/> 
        <Route path="/shop" element={<Shop/>}/> 
       </Route>
   </Routes>
  );
};

export default App;
