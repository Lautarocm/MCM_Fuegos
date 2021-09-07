import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.scss"
// import "../ItemCount/ItemCount"

const ItemListContainer = () => {
    return (
        <main>
            <h1>Aqui irá el catalogo de productos de MCM Fuegos</h1>
            <ItemCount stock={6} />
        </main>
    )
}

export default ItemListContainer