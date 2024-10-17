import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  total: () => {},
  totalItems: 0,
});

export const BasketProvider = ({ children }) => {
    const [totalItems, setTotalItems] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const total = ()=>{

    }
    const addCartItem = (productToAdd, cartItems) => {
        setTotalItems((prevTotalItems) => prevTotalItems + 1);

        const updateProductToAdd = { ...productToAdd, quantity: 1 };
        let cartItemsUpdate = [...cartItems];
        const indexFind = cartItems.findIndex((item) => item.id === productToAdd.id);

        if (indexFind !== -1) {
        cartItemsUpdate[indexFind].quantity = cartItemsUpdate[indexFind].quantity + updateProductToAdd.quantity;
        return cartItemsUpdate;
        } else {
        cartItemsUpdate = [...cartItems, { ...productToAdd, quantity: 1 }];
        return cartItemsUpdate;
        }       
    };

    const reduceCartItemQuantity = (productToReduce) => {
        let cartItemsUpdate = [...cartItems];
        const indexFind = cartItems.findIndex((item) => item.id === productToReduce.id);

        if (indexFind !== -1) {
            cartItemsUpdate[indexFind].quantity = cartItemsUpdate[indexFind].quantity - 1;
        }
        if (cartItemsUpdate[indexFind].quantity <= 0) {
            return deleteItem(productToReduce);
        }
        return cartItemsUpdate;
    };

    const deleteItem = (product) => {
        const cartItemsUpdate = cartItems.filter(item => item.id !== product.id);
        setTotalItems(prev=>prev - product.quantity)
        setCartItems(prev=>cartItemsUpdate)
        return cartItemsUpdate;
    };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(productToAdd, cartItems));
  };

  const reduceItemQuantity = (productToReduce) => {
    totalItems > 0 && setTotalItems((prevTotalItems) => prevTotalItems - 1);
    setCartItems(reduceCartItemQuantity(productToReduce));
  };

  const value = { cartItems, setCartItems, addItemToCart, reduceItemQuantity, deleteItem, totalItems, setTotalItems,total };

  return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>;
};

