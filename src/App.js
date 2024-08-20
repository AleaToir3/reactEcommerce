 
import { Routes, Route, Link } from "react-router-dom";
import Home from "./route/HomeComponents/Home.components";


const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
   </Routes>
  );
};

export default App;
