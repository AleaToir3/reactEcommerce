import { useContext } from 'react';
import { BasketContext } from '../../contexts/basket.context';
import Button from '../button/button.component';
import './product-card.styles.scss'

const ProductCard = ({product})=>{
    const {name , price , imageUrl} = product;
    const {basket,setBasket, addItemToCart} = useContext(BasketContext)

     return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'> {price} </span>
                <Button buttonType="inverted" onClick={()=>{addItemToCart(product)}}>Add to card</Button>
            </div>
        </div>
    )
}
export default ProductCard;