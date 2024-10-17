import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { BasketContext } from '../../contexts/basket.context'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
  

const CartDropDown = ()=>{
    const { cartItems } = useContext(BasketContext);
    console.log(cartItems);
    const navigate = useNavigate()
    const goToHandler =()=>{
         navigate('/checkout')
    }
      return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                
                {cartItems.map((cartItem)=>{
                    return <CartItem cartItem={cartItem} key={cartItem.id}/>
                })}

                     <Button onClick={goToHandler}>Go to checkout</Button>
             </div>

        </div>
    )
}
export default CartDropDown;