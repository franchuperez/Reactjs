import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductoPorId } from "../services/firebase";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [agregado, setAgregado] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    setAgregado(false);
    
    getProductoPorId(id)
      .then((prod) => {
        setProducto(prod);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar producto:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="loader">Cargando producto...</p>;
  }

  if (!producto) {
    return <p className="no-productos">Producto no encontrado</p>;
  }

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div className="detalle-producto">
      <img src={producto.image} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
      {producto.stock && <p>Stock disponible: {producto.stock}</p>}

      {!agregado ? (
        <ItemCount stock={producto.stock || 10} onAdd={handleAdd} />
      ) : (
        <div className="btn-ir-carrito">
          <Link to="/cart">Ir al carrito</Link>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;