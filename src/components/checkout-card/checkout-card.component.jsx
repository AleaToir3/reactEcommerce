import { useContext } from "react";
import { BasketContext } from "../../contexts/basket.context";
import './checkout-item.styles.scss'

const CheckoutCard = ({product})=>{
    const {id,imageUrl,name,quantity,price} = product;
    const finalPrice = quantity * price;
    const {addItemToCart,reduceItemQuantity,deleteItem} = useContext(BasketContext)
    
    const addQuantity = ()=>{
        addItemToCart(product)
    }
    const removeQuantity = ()=>{
        reduceItemQuantity(product)
    }
    const deletItemFromItems = ()=>{
        deleteItem(product);
    }
     return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img  src={imageUrl} alt={`${name}`}/>
        </div>
        <span className='name'> {name} </span>
        <span className='quantity'>
            <div className='arrow' onClick={removeQuantity}> &#10094; </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addQuantity}> &#10095; </div>
        </span>
        <span className='price'> {finalPrice}</span>
        <div className='remove-button' onClick={deletItemFromItems}> &#10005; </div>
    </div>
    )
}
export default CheckoutCard;    