import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext({
    cartItems:[],
    addItemToCart:()=>{},
    totalItems:0
    })
    
export const BasketProvider = ({children})=>{

const addCartItem = (productToAdd,cartItems,totalItems)=>{ 
    setTotalItems(prevTotalItems => prevTotalItems + 1);
     console.log("concon",totalItems);
     const updateProductToAdd = {...productToAdd, quantity: 1 }
     let cartItemsUpdate = [...cartItems];
     const indexFind = cartItems.findIndex(item => item.id === productToAdd.id);

    if(indexFind !== -1){
         cartItemsUpdate[indexFind].quantity = cartItemsUpdate[indexFind].quantity + updateProductToAdd.quantity;
         return cartItemsUpdate       
    }else {
         cartItemsUpdate = [...cartItems, { ...productToAdd, quantity: 1 }]
        return cartItemsUpdate
    }
 }


    const [totalItems,setTotalItems] = useState(0)
    const [cartItems,setCartItems] = useState([])
    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(productToAdd,cartItems))
    }


    useEffect(() => {
        console.log("État actuel de cartItems :", cartItems);
      }, [cartItems]);
    
    const value = {cartItems,setCartItems,addItemToCart,totalItems,setTotalItems}
    return(
        <BasketContext.Provider value={value} >
            {children}
        </BasketContext.Provider>
    )
    
}