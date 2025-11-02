import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../services/firebase";
import ItemList from "./ItemList";

function ItemListContainer() {
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);
const { categoriaId } = useParams();

useEffect(() => {
    setLoading(true);
    
    const fetchData = async () => {
try {
const data = categoriaId 
    ? await getProductosPorCategoria(categoriaId)
    : await getProductos();

console.log(" Productos traídos desde Firestore:", data);
setProductos(data);
} catch (error) {
console.error("Error al cargar productos:", error);
setProductos([]);
} finally {
setLoading(false);
}

    };

    fetchData();
}, [categoriaId]);

if (loading) return <p className="loader">Cargando productos...</p>;

if (productos.length === 0)
    return <p className="no-productos">No hay productos disponibles</p>;

return (
    <div className="catalogo">
    <h2>{categoriaId ? `Categoría: ${categoriaId}` : "Catálogo de Productos"}</h2>
    <ItemList productos={productos} />
    </div>
);
}

export default ItemListContainer;