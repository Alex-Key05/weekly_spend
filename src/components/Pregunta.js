import { useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setQuestion }) => {
  const [cantidad, setCantidad] = useState(0);

  const [error, setError] = useState(false);

  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // Validation
    if (cantidad < 1 || isNaN(cantidad)) {
        setError(true);
        return;
    }
    setError(false);

    // Send to App
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setQuestion(false);
  };
  return (
    <>
      <h2>Put your budget</h2>
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          placeholder="Write your budget"
          className="u-full-width"
          onChange={definirPresupuesto}
        />
        {
            error ? <Error message="Budget required" />: null
        }
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Send budget"
        />
      </form>
    </>
  );
};

export default Pregunta;
