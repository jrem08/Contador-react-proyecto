import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Contador</h2>
        <p className="count">{count}</p>
        <div className="btn-group">
          <button className="btn increment" onClick={() => setCount(count + 1)}>
            ➕ Incrementar
          </button>
          <button className="btn decrement" onClick={() => setCount(count - 1)}>
            ➖ Decrementar
          </button>
          <button className="btn reset" onClick={() => setCount(0)}>
            🔄 Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}
