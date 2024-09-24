import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { BasketContext } from '../../contexts/basket.context'


const CartDropDown = ()=>{
    const {basket} = useContext(BasketContext)
    console.log('object',basket);
     return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <Button>Go to checkout</Button>
            </div>

        </div>
    )
}
export default CartDropDown;