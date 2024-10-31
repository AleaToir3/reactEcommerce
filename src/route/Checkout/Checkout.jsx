import { useContext } from "react";
import { BasketContext } from "../../contexts/basket.context";
import CheckoutCard from "../../components/checkout-card/checkout-card.component";
import './checkout.styles.scss'
  

const Checkout = ()=>{
    const { cartItems } = useContext(BasketContext);
     return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
                {cartItems.map((product) => (
                <CheckoutCard key={product.id} product={product} />
                ))}
            <div className='total'>TOTAL: £{}</div>
        </div>
    )
}
export default Checkout;