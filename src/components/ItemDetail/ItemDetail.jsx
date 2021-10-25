import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Spinner from "../Spinner/Spinner";
import "./ItemDetail.scss"
import { Link } from "react-router-dom";
import Button from "../Button/Button"

const firstCapital = str => str?.charAt(0).toUpperCase() + str?.toLowerCase().slice(1)

const ItemDetail = ({product}) => {

    const [itemAdded, setItemAdded] = useState(false)

    if(!product){
        return <Spinner />
    }

    return (
        <div className="itemDetail">
            <header>
                <h2 className="title">{firstCapital(product.title)}</h2>
            </header>
            <main>
                <img src={product.pictureUrl} alt="" />
                <div className="details">
                    <p className="description">{firstCapital(product.longDesc)}</p>
                    <p className="price">${product.price}</p>
                </div>
            </main>
            <footer>
               {!itemAdded ? <ItemCount className="counter" product={product} itemAdded={setItemAdded} /> : <Link to="/cart"><Button label="Ir al Carrito" /></Link>}
            </footer>
        </div>
    );
}
 
export default ItemDetail;