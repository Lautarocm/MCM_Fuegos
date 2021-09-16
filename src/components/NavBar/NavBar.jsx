import "./NavBar.scss";
import logo from "../../assets/images/logo.svg"
import NavBarItem from "../NavBarItem/NavBarItem";
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo mcm" className="navbar__logo" />
            <ul className="navbar__menu">
                <NavBarItem label="Home" />                
                <NavBarItem label="Productos" />
                <NavBarItem label="Contacto" />                
                <CartWidget />
            </ul>

        </nav>
    )
}

export default NavBar