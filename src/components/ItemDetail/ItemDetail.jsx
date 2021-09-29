import ItemCount from "../ItemCount/ItemCount";
import Spinner from "../Spinner/Spinner";
import "./ItemDetail.scss"

const firstCapital = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

const ItemDetail = ({item}) => {

    if(!item){
        return <Spinner />
    }

    return (
        <div className="itemDetail">
            <header>
                <h2 className="title">{firstCapital(item.title)}</h2>
            </header>
            <main>
                <img src={item.pictureUrl} alt="" />
                <div className="details">
                    <p className="description">{firstCapital(item.longDescription)}</p>
                    <p className="price">${item.price}</p>
                </div>
            </main>
            <footer>
                <ItemCount className="counter" item={item} />
            </footer>
        </div>
    );
}
 
export default ItemDetail;