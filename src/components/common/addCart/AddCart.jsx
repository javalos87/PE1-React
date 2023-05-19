import { useState } from "react";
import CartWidget from "../cartWidget/CartWidget";
import "../cartWidget/CartWidget.css";

const AddCart = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <CartWidget number={count} />
      <button onClick={() => setCount(count + 1)}>Agregar</button>
      <button onClick={() => setCount(count - 1)}>Quitar</button>
      <button onClick={() => setCount(0)}>Vaciar</button>
    </div>
  );
};

export default AddCart;
