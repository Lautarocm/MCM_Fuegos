import {useState} from "react"
import "./ItemCount.scss"

const ItemCount = ({stock}) => {

    const minimum = 0
    const addOne = () => {count < stock && setCount(count +1)}
    const removeOne = () => {count > minimum && setCount(count -1)}
    
    const [count, setCount] = useState(0)

    return (
        <div className="itemCount">
            <p>CANTIDAD</p>
            <div className="itemCount__buttons">
                <button onClick={removeOne}>-</button>
                <p>{count}</p>
                <button onClick={addOne}>+</button>
            </div>
            {count <= minimum ? <p>Cuantas unidades quieres?</p> : <button className="addToCart-btn">Agregar al carrito</button>}
            <p className="stock">Stock: {stock}</p>
        </div>
    );
}
 
export default ItemCount;