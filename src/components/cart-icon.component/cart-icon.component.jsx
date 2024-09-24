import { useEffect, useState } from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({setBasketVisibility,countItem}) =>{
    const clickOnBasket = ()=>{
         setBasketVisibility(prev => !prev)  
     }
 return (
<div className='cart-icon-container' onClick={clickOnBasket} >
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'> {countItem} </span>
</div>
)
}
export default CartIcon