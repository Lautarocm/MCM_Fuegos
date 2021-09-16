import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss"

const ItemDetail = ({item}) => {
    return (
        <div className="itemDetail">
            <main>
                <p>{item.description}</p>
            </main>
            <footer>
                <ItemCount stock={item.stock} />
            </footer>
        </div>
    );
}
 
export default ItemDetail;