 import '../../components/category-item/style/categories.styles.scss'
 import CategoryItem from '../../components/category-item/category-Item.components' 
import { Outlet } from 'react-router-dom';
 

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route:"shop/hats"
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route:"shop/jackets"
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route:"shop/sneakers"
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route:"shop/womens"
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route:"shop/mens"
    },
  ];

  return (
    <div className="categories-container">
       {categories.map((category) => {
        return <CategoryItem category={category} key={category.id}/>;
      })}   
      <Outlet/>
   
    </div>
    
  );
};
export default Home;
