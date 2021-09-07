import "./Item.scss"

const Item = ({itemData}) => {

    console.log(itemData.pictureUrl)

    return (
        <div>
            <img alt="#" src={itemData.pictureUrl}></img>
            <p>{itemData.title}</p>
            <p>${itemData.price}</p>
            <p>id: {itemData.id}</p>
        </div>
    );
}
 
export default Item;