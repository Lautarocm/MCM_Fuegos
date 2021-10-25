import { Fragment, useState, useContext } from "react"
import "./ItemCount.scss"
import CartContext from '../../context/CartContext';
import Button from "../Button/Button"



const ItemCount = ({product, itemAdded}) => {

    
    const [counter, setCounter] = useState(0)
    const { addItem } = useContext(CartContext)
    const addOne = () => {counter < product.stock && setCounter(counter +1)}
    const removeOne = () => {counter > 0 && setCounter(counter -1)}

    const onClickHandler = (item, counter) => {
        addItem(item, counter)
        itemAdded(true)
    }

    return (
        <div className="itemCount">
            <Fragment>
                <div className="itemCount__buttons">
                    <button disabled={counter === 0} onClick={removeOne}>-</button>
                    <p>{counter}</p>
                    <button disabled={counter === product.stock} onClick={addOne}>+</button>
                </div>
                
                {(counter <= 0 ?

                <p>Cuantas unidades quieres?</p>
                
                :
                
                <Button label="Agregar al carrito" clickHandler={() => onClickHandler(product, counter)} />
                )}
            </Fragment>

            <p className="stock">Stock: {product.stock}</p>
        </div>
    );
}
 
export default ItemCount;