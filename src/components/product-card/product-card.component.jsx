import { useContext } from 'react';
import { BasketContext } from '../../contexts/basket.context';
import Button from '../button/button.component';
import './product-card.styles.scss'

const ProductCard = ({product})=>{
    const {name , price , imageUrl} = product;
    const {basket,setBasket } = useContext(BasketContext)
    const addToCard = ()=>{
        setBasket(prevBasket=>[...prevBasket,product])
    }
    console.log('panier',basket);
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'> {price} </span>
                <Button buttonType="inverted" onClick={addToCard}>Add to card</Button>
            </div>
        </div>
    )

}
export default ProductCard;