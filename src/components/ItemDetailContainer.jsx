import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../data/productos";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductoPorId(id).then(setProducto);
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="detalle-producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
    </div>
  );
}

export default ItemDetailContainer;
