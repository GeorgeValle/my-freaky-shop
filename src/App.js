import './App.css';
import {NavBar} from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './containers/ItemListContainer';
import Cart from './components/Cart';
import {CartContextProvider} from './context/CartContext';
import Login from './components/Login';
import Register from './components/Register';


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="bodys">
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/Item/:id" element={<ItemDetailContainer></ItemDetailContainer>}/>
            <Route path="/Cart" element={<Cart></Cart>}/>
            <Route path="/Login" element={<Login></Login>}/>
            <Route path="/Register" element={<Register></Register>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;
