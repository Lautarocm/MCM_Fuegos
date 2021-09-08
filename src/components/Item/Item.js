import "./Item.scss"
import ItemCount from "../ItemCount/ItemCount"


const Item = ({itemData}) => {

    console.log(itemData.pictureUrl)

    return (
        <div className="item">
            <img alt="#" src={itemData.pictureUrl}></img>
            <div>
                <div className="productInfo">
                    <p className="title">{itemData.title}</p>
                    <div className="containerPrice">
                        <p className="description">{itemData.description}</p>
                        <p className="price">${itemData.price}</p>
                    </div>
                    <ItemCount stock={itemData.stock} />
                </div>
            </div>
        </div>
    );
}
 
export default Item;