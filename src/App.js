import {Fragment, useState, useEffect} from "react"
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainter.jsx';
import { data } from './data';


function App() {

  function getList(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve (data)
          setLoading(false)
        }, 2000)
    })
  }

  const [itemList, setItemList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
        
    const list = getList()

    list.then(list => {
        setItemList(list)
    }, err => console.log(err))
    .catch((reason) => console.log(reason))
  }, [])

  return (
    <Fragment>
      <NavBar />
      <ItemListContainer itemList={itemList} loading={loading} />
    </Fragment>
  )
}

export default App;
