import { useState, Fragment, useContext } from "react"
import { Link } from "react-router-dom"
import "./ItemCount.scss"
import CartContext from '../../context/CartContext';



const ItemCount = ({item}) => {
    
    const { addItem } = useContext(CartContext)
    const [clicked, setClicked] = useState(false)
    const minimum = 0
    const addOne = () => {count < item.stock && setCount(count +1)}
    const removeOne = () => {count > minimum && setCount(count -1)}
    const [count, setCount] = useState(0)


    return (
        <div className="itemCount">
            
            {clicked ? 
                <Fragment>
                    <div className="itemCount__buttons">
                        <button disabled>-</button>
                        <p>{count}</p>
                        <button disabled>+</button>
                    </div>
                    <Link to="/cart"><button className="addToCart-btn">Finalizar compra</button></Link>
                </Fragment> :
                <Fragment>
                    <div className="itemCount__buttons">
                        <button disabled={count === minimum} onClick={removeOne}>-</button>
                        <p>{count}</p>
                        <button disabled={count === item.stock} onClick={addOne}>+</button>
                    </div>
                    {(count <= minimum ? 
                        <p>Cuantas unidades quieres?</p> : 
                        <button onClick={() => {addItem(item, count); setClicked(true)}} className="addToCart-btn">Agregar al carrito</button>)}
                </Fragment>
            }
            <p className="stock">Stock: {item.stock}</p>
        </div>
    );
}
 
export default ItemCount;