import { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { getList } from './getList.jsx';
import Contact from "./components/Contact/Contact.jsx"
import Cart from "./components/Cart/Cart.jsx"
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainter';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartContextProvider} from "./context/CartContext"



function App() {

  const [itemList, setItemList] = useState([])

  useEffect(() => {
        
    const list = getList()

    list.then(list => {
        setItemList(list)
    }, err => console.log(err))
    .catch((reason) => console.log(reason))
  }, [])

  return (
    <CartContextProvider>
      <Router>
        <NavBar itemList={itemList} />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:category">
            <ItemListContainer />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </CartContextProvider>
  )
}

export default App;
