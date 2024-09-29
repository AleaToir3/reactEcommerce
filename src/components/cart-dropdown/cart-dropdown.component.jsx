import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { BasketContext } from '../../contexts/basket.context'
import CartItem from '../cart-item/cart-item.component'
 

const CartDropDown = ()=>{
    const { cartItems } = useContext(BasketContext);
    console.log(cartItems);
      return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                
                {cartItems.map((cartItem)=>{
                    return <CartItem cartItem={cartItem}/>
                })}


                <Button>Go to checkout</Button>
            </div>

        </div>
    )
}
export default CartDropDown;