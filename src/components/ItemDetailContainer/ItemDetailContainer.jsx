import { useState, useEffect } from "react/cjs/react.development"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/Firebase"
import Spinner from "../Spinner/Spinner"

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        getDoc(doc(db, "products", id)).then(querySnapshot => {
            const item = {id: id, ...querySnapshot.data()}
            setProduct(item)
        }).catch(error => console.log("error searching item: ", error))
        .finally(setLoading(false))
    }, [id])

    return (
        <div className="itemDetailContainer">
            {loading ? <Spinner /> : <ItemDetail product={product} />}
        </div>
    );
}
 
export default ItemDetailContainer