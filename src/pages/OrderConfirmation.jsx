import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OrderConfirmation() {
const [orderData, setOrderData] = useState(null);
const navigate = useNavigate();

useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrder");
    
    if (!lastOrder) {
    navigate("/");
    return;
    }
    
    setOrderData(JSON.parse(lastOrder));
}, [navigate]);

if (!orderData) {
    return <div className="loader">Cargando...</div>;}

return (
    <div className="confirmation-container">
    <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h1>¡Compra Confirmada!</h1>
        <p className="confirmation-message">
        Gracias por tu compra. Hemos recibido tu orden correctamente.
        </p>

        <div className="order-info">
        <div className="info-row">
            <span className="info-label">Número de Orden:</span>
            <span className="info-value">{orderData.orderId}</span>
        </div>
        <div className="info-row">
            <span className="info-label">Fecha:</span>
            <span className="info-value">{orderData.fecha}</span>
        </div>
        <div className="info-row">
            <span className="info-label">Total:</span>
            <span className="info-value total-value">${orderData.total}</span>
        </div>
        </div>

        <div className="client-info">
        <h3>Datos de Envío</h3>
        <p><strong>Nombre:</strong> {orderData.cliente.nombre}</p>
        <p><strong>Email:</strong> {orderData.cliente.email}</p>
        <p><strong>Teléfono:</strong> {orderData.cliente.telefono}</p>
        <p><strong>Dirección:</strong> {orderData.cliente.direccion}</p>
        </div>

        <div className="order-items">
        <h3>Productos Comprados</h3>
        {orderData.productos.map((item) => (
            <div key={item.id} className="confirmation-item">
            <img src={item.imagen} alt={item.nombre} />
            <div className="item-details">
                <p className="item-name">{item.nombre}</p>
                <p className="item-quantity">Cantidad: {item.cantidad}</p>
            </div>
              <p className="item-price">${item.cantidad * item.precio}</p>
            </div>
        ))}
        </div>

        <div className="confirmation-actions">
        <Link to="/" className="btn-back-home">
            Volver al Inicio
        </Link>
        </div>

        <div className="confirmation-note">
        <p className="thank-you-message">
            Muchas gracias por su compra. En breves se enviará el código de seguimiento y la factura de la compra a tu mail. ¡Saludos!
        </p>
        <p className="email-info">
            Email de contacto: <strong>{orderData.cliente.email}</strong>
        </p>
        </div>
    </div>
    </div>
);
}

export default OrderConfirmation;