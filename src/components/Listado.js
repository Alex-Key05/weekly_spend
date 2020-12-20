import Gasto from './Gasto';

const Listado = ({expenses}) => {
  return (
    <>
      <div className="gastos-realizados">
        <h2>listado</h2>
        { expenses.map( expense => (
            <Gasto
                key={expense.id}
                name={expense.name}
                quantity={expense.quantity}
            />
        )) }
      </div>
    </>
  );
};

export default Listado;
