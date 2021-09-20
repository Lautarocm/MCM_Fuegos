import "./NavBar.scss";
import {NavLink, Link} from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import NavBarItem from "../NavBarItem/NavBarItem";
import CartWidget from "../CartWidget/CartWidget"

const NavBar = ({itemList}) => {

    const categories = [...new Set(itemList.map(item => item.category))]

    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="logo mcm" className="navbar__logo" />
            </Link>
            <ul className="navbar__menu">
                
                <NavLink activeClassName="navLinkActive" className="navLink" exact to="/">
                    <NavBarItem label="productos" />
                </NavLink>

                {categories.map(cat => 
                    <NavLink key={cat} activeClassName="navLinkActive" className="navLink" to={`/category/${cat}`}>
                        <NavBarItem label={cat} />
                    </NavLink>
                )}
                
                <NavLink activeClassName="navLinkActive" className="navLink" to="/contact">
                    <NavBarItem label="contacto" />  
                </NavLink>
                
                <NavLink activeClassName="navLinkActive" className="navLink" to="/cart">
                    <CartWidget />
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar