import { useContext } from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { BasketContext } from '../../contexts/basket.context'

const CartIcon = ({setBasketVisibility,countItem}) =>{
    const clickOnBasket = ()=>{
         setBasketVisibility(prev => !prev)  
     }
    const {totalItems} = useContext(BasketContext)
 return (
<div className='cart-icon-container' onClick={clickOnBasket} >
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'> {totalItems}</span>
</div>
)
}
export default CartIcon