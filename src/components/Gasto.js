const Gasto = ({ name, quantity }) => (
  <li>
    <p>
     {name}
     <span className="gasto">${quantity}</span>
    </p>
  </li>
);
export default Gasto;
