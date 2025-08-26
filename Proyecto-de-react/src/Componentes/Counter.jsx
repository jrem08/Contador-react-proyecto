// Importamos el hook useState desde React para manejar el estado
import { useState } from "react";

// Importamos los estilos del archivo CSS
import "./Counter.css";

// Definimos y exportamos el componente funcional Counter
export default function Counter() {
     // Declaramos una variable de estado llamada count, iniciada en 0
  // setCount es la función que usamos para actualizar el estado de count
  const [count, setCount] = useState(0);

   // El componente retorna JSX (la interfaz del contador)
  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Contador</h2>
        <p className="count">{count}</p>
        <div className="btn-group">
          <button className="btn increment" onClick={() => setCount(count + 1)}>
             Incrementar
          </button>
          <button className="btn decrement" onClick={() => setCount(count - 1)}>
             Decrementar
          </button>
          <button className="btn reset" onClick={() => setCount(0)}>
             Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}

