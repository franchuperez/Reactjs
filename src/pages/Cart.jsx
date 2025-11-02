import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
const { cart, removeItem, clearCart, totalPrice } = useCart();

if (cart.length === 0) {
    return (
    <div className="cart-vacio">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos para comenzar tu compra</p>
        <Link to="/" className="btn-back-home" style={{ marginTop: "2rem", display: "inline-block" }}>
        Ir al Catálogo
        </Link>
    </div>
    );
}

return (
    <div className="cart-container">
    <h2>Carrito de Compras</h2>
    
    <div className="cart-list">
        {cart.map((prod) => (
        <div key={prod.id} className="cart-item">
            <img src={prod.imagen} alt={prod.nombre} />
            <div className="cart-item-info">
            <h3>{prod.nombre}</h3>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio unitario: ${prod.precio}</p>
              <p className="cart-item-subtotal">Subtotal: ${prod.cantidad * prod.precio}</p>
            </div>
            <button 
            onClick={() => removeItem(prod.id)} 
            className="btn-remove"
            aria-label="Eliminar producto"
            >
            ×
            </button>
        </div>
        ))}
    </div>

    <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
    </div>

    <div className="cart-actions">
        <button onClick={clearCart} className="btn-clear-cart">
        Vaciar carrito
        </button>
        <Link to="/checkout" className="btn-checkout">
        Finalizar compra
        </Link>
    </div>
    </div>
);
}

export default Cart;