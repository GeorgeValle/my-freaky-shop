
import './App.css';
//import Curso from './components/Curso';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/ItemCount';

// const Curso = (name, teacher, duration)



// style={{color: 'red', fontSize: '50px'}}
function App() {
  return (
    <div>
      <div className="App">
      
      <NavBar></NavBar>
      <ItemListContainer greeting="Futuro incrementador o lo que sea" >
  </ItemListContainer>
  <ItemCount stock={5} />
      {/* <h1>Cursos React</h1>

        {curso } 

        <Curso name="React Js" teacher="Leo Messi" duration={7}/>
        <Curso name="Javascript" teacher="Carlos Gardel" duration={7}/> */}
        
      </div>
    </div>
  );
}

export default App;
