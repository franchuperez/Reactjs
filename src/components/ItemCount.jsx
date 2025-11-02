import { useState } from "react";

function ItemCount({ stock, onAdd }) {
const [cantidad, setCantidad] = useState(1);

const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
};

const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
};

return (
    <div className="item-count">
    <div className="contador">
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
    </div>
    <button className="btn-agregar" onClick={() => onAdd(cantidad)}>
        Agregar al carrito
    </button>
    </div>
);
}

export default ItemCount;
