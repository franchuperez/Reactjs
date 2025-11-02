import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ItemDetail({ producto }) {
const { addToCart } = useCart();
const [agregado, setAgregado] = useState(false);

const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
};

if (!producto) return <p>Cargando detalle...</p>;

return (
    <div className="item-detail">
    <div className="item-detail-img">
        <img
        src={producto.image || "https://via.placeholder.com/400?text=Sin+Imagen"}
        alt={producto.nombre}
        width="300"
        />
    </div>

    <div className="item-detail-info">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>

        {!agregado ? (
        <ItemCount stock={producto.stock} onAdd={handleAdd} />
        ) : (
        <p style={{ color: "green" }}> Producto agregado al carrito</p>
        )}
    </div>
    </div>
);
}

export default ItemDetail;
