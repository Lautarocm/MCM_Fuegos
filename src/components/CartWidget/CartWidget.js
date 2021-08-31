import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />


const CartWidget = () => {
    return (
        <button className="navbar__cartIcon"> {cartIcon} </button>
    );
}
 
export default CartWidget;