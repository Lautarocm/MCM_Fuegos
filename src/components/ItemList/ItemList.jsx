import Item from "../Item/Item";
import "./ItemList.scss"


const ItemList = ({items}) => {

    return (
        <div className="itemList">
            {
                items.map(item => (
                    <Item key={item.id} itemData={item} />
                ))
            }
        </div>
    );
}
 
export default ItemList;