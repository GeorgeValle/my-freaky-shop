
import './App.css';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './containers/ItemListContainer';
import Cart from './components/Cart';

//import Item from './components/Item';
//import ItemCount from './components/ItemCount';




// style={{color: 'red', fontSize: '50px'}}
function App() {

  return (

    <BrowserRouter>
      <NavBar></NavBar>
      <div className="bodys">
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/Item/:id" element={<ItemDetailContainer></ItemDetailContainer>}/>
        <Route path="/Cart" element={<Cart></Cart>}/>
      </Routes>
      </div>
    </BrowserRouter>


    // <div>
    //   <div className="App">
    //     <NavBar></NavBar>
    //   <ItemDetailContainer></ItemDetailContainer> 
    //   </div>
    // </div>
  );
}

export default App;
