import { useState, useEffect } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ showquestion, setQuestion ] = useState(true);
  const [ expenses, setExpenses ] = useState([]);
  const [ expense, saveExpense ] = useState({});
  const [ crearGasto, guardarCrearGasto ] = useState(false);

  // useEffect which updates the remaining
  useEffect( () => {
    // Validacion para que no se agregue un 
    // objeto vacío
    if(crearGasto) {
      // agrega el nuevo presupuesto
      setExpenses([...expenses, expense]);
    }

    // resta del presupuesto actual
    const presupuestoRestante = restante - expense.quantity;
    setRestante(presupuestoRestante);

    // Reset to false
    guardarCrearGasto(false);
  }, [expense]);

  return (
    <div className="container">
      <header>
        <h1>Weekly spend</h1>

        <div className="contenido-principal contenido">
          { showquestion ? 
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setQuestion={setQuestion}
            />

          : 
            <div className="row">
              <div className="one-half column">
                <Formulario
                  saveExpense={saveExpense}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>

              <div className="one-half column">
                <Listado
                  expenses={expenses}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
