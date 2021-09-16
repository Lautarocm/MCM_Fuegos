import "./Item.scss"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Item = ({itemData}) => {

    return (
        <div className="item">
            <img alt="#" src={itemData.pictureUrl}></img>
            <div>
                <div className="productInfo">
                    <p className="title">{itemData.title}</p>
                    <div className="details">
                        <p className="price">${itemData.price}</p>
                        <ItemDetailContainer item={itemData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Item;