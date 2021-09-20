import "./NavBarItem.scss"

const firstCapital = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

const NavBarItem = ({label}) => {


    return (
        <li>
            <button className="navbar__item">{firstCapital(label)}</button>
        </li>
    );
}
 
export default NavBarItem;