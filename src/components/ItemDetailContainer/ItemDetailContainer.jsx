import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss"

const ItemDetailContainer = ({item}) => {
    return (
        <div className="itemDetailContainer">
            <ItemDetail key={item.id} item={item} />
        </div>
    );
}
 
export default ItemDetailContainer;