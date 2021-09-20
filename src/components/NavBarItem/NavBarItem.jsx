import "./NavBarItem.scss"

const NavBarItem = ({label}) => {


    return (
        <li>
            <button className="navbar__item">{label.charAt(0).toUpperCase() + label.slice(1)}</button>
        </li>
    );
}
 
export default NavBarItem;