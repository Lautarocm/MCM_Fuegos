import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.scss"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/Firebase"
import Spinner from "../Spinner/Spinner"

const ItemListContainer = () => {

    const {category} = useParams()
    const [products, setProducts] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        if(!category){
            getDocs(collection(db, "products")).then(querySnapshot => {
                const items = querySnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}})
                setProducts(items)
            }).catch((error) => console.log("error searching items: ", error))
            .finally(setLoading(false))
        }
        else{
            getDocs(query(collection(db, "products"), where("category", "==", category))).then(querySnapshot => {
                const items = querySnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}})
                setProducts(items)
            }).catch((error) => console.log("error searching items: ", error))
            .finally(setLoading(false))
        }
        
    }, [category])

    return (
        <div className="itemListContainer">
            <h1>Productos</h1>
            {loading ? <Spinner /> : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer