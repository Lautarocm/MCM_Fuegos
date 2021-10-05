import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Spinner from "../Spinner/Spinner";
import "./ItemDetail.scss"
import { Link } from "react-router-dom";
import Button from "../Button/Button"

const firstCapital = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

const ItemDetail = ({item}) => {

    const [itemAdded, setItemAdded] = useState(false)

    if(!item){
        return <Spinner />
    }

    return (
        <div className="itemDetail">
            <header>
                <h2 className="title">{firstCapital(item.title)}</h2>
            </header>
            <main>
                <img src={item.pictureUrl} alt="" />
                <div className="details">
                    <p className="description">{firstCapital(item.longDescription)}</p>
                    <p className="price">${item.price}</p>
                </div>
            </main>
            <footer>
               {!itemAdded ? <ItemCount className="counter" item={item} itemAdded={setItemAdded} /> : <Link to="/cart"><Button label="Finalizar compra" /></Link>}
            </footer>
        </div>
    );
}
 
export default ItemDetail;