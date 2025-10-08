import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../data/productos";

function ItemListContainer() {
const [productos, setProductos] = useState([]);
const { categoriaId } = useParams();

useEffect(() => {
    const fetchData = categoriaId ? getProductosPorCategoria(categoriaId) : getProductos();
    fetchData.then(setProductos);
}, [categoriaId]);

return (
    <div className="catalogo">
    <h2>{categoriaId ? `Categoría: ${categoriaId}` : "Catálogo de Productos"}</h2>
    <div className="lista-productos">
        {productos.map(prod => (
        <div key={prod.id} className="card">
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>${prod.precio}</p>
            <Link to={`/item/${prod.id}`}>Ver Detalle</Link>
        </div>
        ))}
    </div>
    </div>
);
}

export default ItemListContainer;
