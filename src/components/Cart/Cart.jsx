import React, { useContext, useState } from 'react'
import "./Cart.scss"
import CartContext from '../../context/CartContext'
import Button from "../Button/Button"
import { collection, addDoc, doc, writeBatch, Timestamp, getDoc } from '@firebase/firestore'
import { db } from '../../services/firebase/Firebase'
import UserForm from '../UserForm/UserForm'

const Cart = () => {

    const { addedProducts, removeItem, clear, total } = useContext(CartContext)
    const [processingOrder, setProcessingOrder] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [generatedOrder, setGeneratedOrder] = useState()
    const [orderId, setOrderId] = useState()

    const confirmOrder = (buyer) => {
        
        setProcessingOrder(true)
        
        const order = {
            buyer: buyer,
            items: addedProducts,
            date: Timestamp.fromDate(new Date()),
            total: total
        }

        const batch = writeBatch(db)
        const outOfStock = []

        order.items.forEach((prod, index) => {
            getDoc(doc(db, "products", prod.id)).then(docSnap => {
                if(docSnap.data().stock >= order.items[index].quantity){
                    batch.update(doc(db, "products", docSnap.id), {
                        stock: docSnap.data().stock - order.items[index].quantity
                    })
                }
                else{
                    outOfStock.push({id: docSnap.id, ...docSnap.data()})
                }
            })
        })

        if(outOfStock.length === 0){
            addDoc(collection(db, "orders"), order).then((ref) => {
                batch.commit()
                setOrderId(ref._key.path.segments[1])
                setGeneratedOrder(true)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setProcessingOrder(false)
                clear()
            })
        }
    }

    return (
        <div className="cart">
            <h1>Carrito</h1>

            {!processingOrder ?
            addedProducts.length === 0 ?
            generatedOrder ? 
            <p>{`Orden generada, el id de su compra es el #${orderId}`}</p>:
            <p>su carrito está vacío</p> :
            <>
                {addedProducts.map(prod =>
                    <div key={prod.id} className="cartItem">
                        <img className="itemImg" src={prod.pictureUrl} alt={`foto ${prod.title}`} />
                        <div className="itemInfo">
                            <h2 className="itemTitle">{prod.title}</h2>
                            <p className="itemDescription">{prod.shortDesc}</p>
                            <p className="itemQuantity">{prod.quantity}</p>
                        </div>
                        <button onClick={() => removeItem(prod.id)} className="removeBtn">x</button>
                    </div>
                )}
                {addedProducts.length > 0 ? 
                <>
                    <Button label="Vaciar carrito" clickHandler={() => clear()} />
                    <Button label="Confirmar compra" clickHandler={() => setShowForm(true)} />
                    <p className="totalPrice">TOTAL: {total}</p>
                    {showForm && <UserForm showForm={setShowForm} confirmOrder={confirmOrder} />}
                </> : 
                generatedOrder && <p>{`Orden generada, el id de su compra es el #${orderId}`}</p>
                }
            </> :
            <p>Procesando orden</p>
            }

            
            
        </div>
    );
}
 
export default Cart;