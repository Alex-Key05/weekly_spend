import { useState } from "react";
import Error from "./Error";
import shortid from 'shortid';

const Formulario = () => {
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

      console.log(expense); 

      // Send expense to main component
      
      // Reset form
  }

  return (
    <form
     onSubmit={ addExpense }
    >
      <h2>Add your expenses here</h2>
      <div className="campo">
        <label>Expense name</label>
        <input
         type="text"
         className="u-full-width" 
         placeholder="Ex. Lunch"
         value={name}
         onChange={ e => setName(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Expense quantity</label>
        <input
         type="number"
         className="u-full-width" 
         placeholder="Ex. 300" 
         value={quantity}
         onChange={ e => setQuantity(parseInt(e.target.value, 10))}
        />
      </div>
        { error ? <Error message="Both fields are required" /> : null }
      <input
        type="submit"
        className="u-full-width button-primary"
        value="Send expense"
      />
    </form>
  );
};

export default Formulario;
