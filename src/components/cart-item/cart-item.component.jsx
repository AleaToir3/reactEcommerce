import './cart-item.styles.scss'
const CartItem = ({cartItem}) =>{
     const  {name,quantity,id,imageUrl,price} = cartItem
    return (
    <div key={cartItem.id} className='cart-item-container'>
    <img  src={imageUrl} alt={`${name}`}/>
    <div className='item-details'> 
         <span className='name'>{name}</span>
        <span className='prince'>{quantity} x ${price}</span>
    </div>
    </div>
)}

export default CartItem;