import { Fragment } from 'react';
import { Link } from "react-router-dom"
import { useState } from "react"
import "./ItemCount.scss"



const ItemCount = ({stock, onConfirm}) => {
    
    const [clicked, setClicked] = useState(false)
    const minimum = 0
    const addOne = () => {count < stock && setCount(count +1)}
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
                        <button disabled={count === stock} onClick={addOne}>+</button>
                    </div>
                    {(count <= minimum ? 
                        <p>Cuantas unidades quieres?</p> : 
                        <button onClick={() => {onConfirm(count); setClicked(true)}} className="addToCart-btn">Agregar al carrito</button>)}
                </Fragment>
            }
            <p className="stock">Stock: {stock}</p>
        </div>
    );
}
 
export default ItemCount;