import { Link } from "react-router-dom"
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import "./ItemList.scss"


const ItemList = ({products}) => {

    return (
        !products ?
        <Spinner /> :
        <div className="itemList">
            {
                products.map(product => (
                    <Link key={product.id} to={`/item/${product.id}`}>
                        <Item itemData={product} />
                    </Link>
                ))
            }
        </div>

    );
}
 
export default ItemList;