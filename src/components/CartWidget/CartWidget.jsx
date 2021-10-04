import { useContext } from 'react';
import "./CartWidget.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../context/CartContext';

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)
    return (
        <div className="icon">
            <button className="navbar__item navbar__cartIcon">{cartIcon}</button>
            <p className="cartQuantity">{cartQuantity}</p>
        </div>
    );
}
 
export default CartWidget;