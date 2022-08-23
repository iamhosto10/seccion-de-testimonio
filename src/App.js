import './App.css';
import Testimonio from './Componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> 
      <h1>Estos es lo que dicen nuestros alumnos sobre freecodecamp</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='Shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />
      </div>
    </div>
  );
}

export default App;
