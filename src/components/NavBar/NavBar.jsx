import "./NavBar.scss";
import {NavLink, Link} from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import NavBarItem from "../NavBarItem/NavBarItem";
import CartWidget from "../CartWidget/CartWidget"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase/Firebase";
import { useState, useEffect } from 'react';


const NavBar = () => {

    const [categories, setCategories] = useState(undefined)
    
    const [products, setProducts] = useState()

    useEffect(() => {

        getDocs(collection(db, "products")).then(querySnapshot => {
            const items = querySnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}})
            setProducts(items)
        }).catch((error) => console.log("error searching items: ", error))

        if(products){
            setCategories([...new Set(products.map(item => item.category))])
        }
        
    }, [products])

    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="logo mcm" className="navbar__logo" />
            </Link>
            <ul className="navbar__menu">
                
                <NavLink activeClassName="navLinkActive" className="navLink" exact to="/">
                    <NavBarItem label="productos" />
                </NavLink>

                {categories && categories.map(cat => 
                    <NavLink key={cat} activeClassName="navLinkActive" className="navLink" to={`/category/${cat}`}>
                        <NavBarItem label={cat} />
                    </NavLink>
                )}
                
                <NavLink activeClassName="navLinkActive" className="navLink" to="/contact">
                    <NavBarItem label="contacto" />  
                </NavLink>
                
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar