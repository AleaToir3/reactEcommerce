import './shop.styles.scss';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/categories-preview.components';
 
  
const Shop = ()=>{

    return  (
  <Routes>
    <Route index element={<CategoriesPreview/>}/>
  </Routes>
)
}
export default Shop;
