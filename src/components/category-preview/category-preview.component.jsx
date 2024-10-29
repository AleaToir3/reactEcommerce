import React from "react";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products })=> {
  return (
    <div className="category-preview-container">
    <Link to={title}>
       <h2> <span className="title">{title.toUpperCase()}</span> </h2>
    </Link>
      <div className="products-container">
        {products
          .filter((p, i) => i < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
