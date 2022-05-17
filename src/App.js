
import './App.css';
import Curso from './components/Curso';
import Navbar from './components/Navbar';

// const Curso = (name, teacher, duration)



function App() {
  return (
    <div>
      <div className="App">
      
      <Navbar></Navbar>
      <h1>Cursos React</h1>

        {/* {curso } */}

        <Curso name="React Js" teacher="Leo Messi" duration={7}/>
        <Curso name="Javascript" teacher="Carlos Gardel" duration={7}/>
        
      </div>
    </div>
  );
}

export default App;
