import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner";
import "./ItemListContainer.scss"

const ItemListContainer = ({itemList, loading}) => {

    return (
        <div className="itemListContainer">
            {loading && <Spinner />}
            <h1>Productos</h1>
            <ItemList items={itemList} />
        </div>
    )
}

export default ItemListContainer