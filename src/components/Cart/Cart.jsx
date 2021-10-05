import React, { useContext } from 'react';
import "./Cart.scss"
import CartContext from '../../context/CartContext';
import Button from "../Button/Button"

const Cart = () => {

    const { addedProducts, removeItem, clear, price } = useContext(CartContext)

    return (
        <div className="cart">
            {addedProducts.map(prod =>
                <div key={prod.id} className="cartItem">
                    <img className="itemImg" src={prod.pictureUrl} alt={`foto ${prod.title}`} />
                    <div className="itemInfo">
                        <h2 className="itemTitle">{prod.title}</h2>
                        <p className="itemDescription">{prod.shortDescription}</p>
                        <p className="itemQuantity">{prod.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(prod.id)} className="removeBtn">x</button>
                </div>
            )}
            {addedProducts.length > 0 ? <><Button label="Vaciar carrito" clickHandler={() => clear()} /> <p className="totalPrice">TOTAL: {price}</p></> : <p>Su carrito está vacío</p>}
            
        </div>
    );
}
 
export default Cart;