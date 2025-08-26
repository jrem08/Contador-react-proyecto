// Importamos el componente Counter desde la carpeta Componentes
import Counter from './Componentes/Counter';

// Importamos los estilos específicos del componente Counter
import './Componentes/Counter.css';


// Importamos estilos generales para la aplicación (opcional)
import './Componentes/App.css';


// Función principal de la aplicación
function App() {
   // Retornamos el componente Counter dentro del componente App
  return <Counter />;
}

// Exportamos App para que pueda ser usado en index.js y renderizado en el navegador
export default App;
