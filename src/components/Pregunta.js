import { useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setQuestion }) => {
  const [ cantidad, setCantidad ] = useState(0); 
  const [ error, setError ] = useState(false);  

  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value));
  }

  const addBudget = e => {
    e.preventDefault();

    // Validation
    if( cantidad < 1 || isNaN(cantidad) ) {
      setError(true);
      return;
    }
    setError(false);
    // Send to main component for certain actions
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setQuestion(false);
  }
  
  return (
    <>
      <form
        onSubmit={ addBudget }
      >
        <h2>Put your expense</h2>
        <input
          type="number"
          className="u-full-width"
          placeholder="Write your budget"
          onChange={ definirPresupuesto }
        />
        { error ? <Error message="Budget required or budget not valid" /> : null }
        <input
          type="submit"
          className="u-full-width button-primary"
          value="Send budget"
        />
      </form>
    </>
  );
};

export default Pregunta;
