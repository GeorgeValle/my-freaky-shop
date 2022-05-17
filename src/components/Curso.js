const Curso = (props) =>{
    return(
      <>
      <hr/>
          <h2>{props.name}</h2>
          <div>Profesor: <span> {props.teacher}</span></div>
          <div>Duración: <span> {props.duration} Semanas</span></div>
          <hr/>
      </>
    )
  }

  export default Curso;