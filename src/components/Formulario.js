import { useState } from "react";
import Error from "./Error";
import shortid from 'shortid';

const Formulario = ({ saveExpense, guardarCrearGasto }) => {
  const [ name, setName ] = useState('');
  const [ quantity, setQuantity ] = useState(0);
  const [ error, setError ] = useState(false);

  const addExpense = e => {
      e.preventDefault();
      
      // Validation
      if( name.trim() === '' || quantity === '' || isNaN(quantity) || quantity < 1) {
        setError(true);
        return;
      }
      setError(false);

      // Create expense
      const expense = {
          name,
          quantity,
          id: shortid(),
      } 

      // Send expense to main component
      saveExpense(expense);

      // Reset form
      setName('');
      setQuantity(0);

      // Para validar si ya hay gastos o no
      // en el useEffect
      guardarCrearGasto(true);
  }

  return (
    <form
     onSubmit={ addExpense }
    >
      <h2>Add your expense</h2>
      <div className="campo">
      
        <label>Expense name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ex. Lunch"
          value={ name }
          onChange={ e => setName(e.target.value) }
        />

        <label>Expense quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ex. 100"
          value={ quantity }
          onChange={ e => setQuantity(parseInt(e.target.value, 10)) }
        />

        { error ? <Error message="Both fields are required" /> : null }

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Send expense"
        />
      </div>
    </form>
  );
};

export default Formulario;
