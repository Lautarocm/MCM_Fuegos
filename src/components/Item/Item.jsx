import "./Item.scss"

const firstCapital = str => 
    str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)


const Item = ({itemData}) => {

    return (
        <div className="item">
            <img alt="#" src={itemData.pictureUrl}></img>
            <div>
                <div className="productInfo">
                    <p className="title">{firstCapital(itemData.title)}</p>
                    <div className="details">
                        <p className="description">{firstCapital(itemData.shortDescription)}</p>
                        <p className="price">${itemData.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Item;