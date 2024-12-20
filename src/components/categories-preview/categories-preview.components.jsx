import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = ()=>{
    const {categoriesMap} = useContext( CategoriesContext );
    
    const titles = Object.keys(categoriesMap);
    return  (
    <>  
        {titles.map(title => (
            <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
         ))}        
    </>
)
}
export default CategoriesPreview;

