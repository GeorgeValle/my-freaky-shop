
import './App.css';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './containers/ItemListContainer';

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
        <Route path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}/>
        {/* <Route path="/" element={<h1></h1>}/> */}
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
