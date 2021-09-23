import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Spinner from "../Spinner/Spinner";
import "./ItemDetail.scss"

const firstCapital = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

const ItemDetail = ({item}) => {

    const [quantity, setQuantity] = useState(0)

    const addToCart = (productsQuantity) => {
        setQuantity(productsQuantity)
    }

    //useEffect para testear que se setee bien el quantity
    useEffect(() => {
        console.log(quantity)
        return () => {console.log(`dismounting ${quantity}`)}
    }, [quantity])

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
                <ItemCount className="counter" onConfirm={addToCart} stock={item.stock} />
            </footer>
        </div>
    );
}
 
export default ItemDetail;