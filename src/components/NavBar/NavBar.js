import "./NavBar.scss";
import logo from "../../images/logo-mcm.jpg"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo mcm" className="navbar__logo" />
            <ul className="navbar__menu">
                <li><button className="navbar__btn">Home</button></li>
                <li><button className="navbar__btn">Productos</button></li>
                <li><button className="navbar__btn">Contacto</button></li>
                <CartWidget />
            </ul>

        </nav>
    )
}

export default NavBar