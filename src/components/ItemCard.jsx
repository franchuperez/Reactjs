import { Link } from "react-router-dom";

function ItemCard({ producto }) {
return (
    <div className="card">
    <img src={producto.image} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p>${producto.precio}</p>
    <Link to={`/item/${producto.id}`} className="btn-ver-detalle">
        Ver detalle
    </Link>
    </div>
);
}

export default ItemCard;
