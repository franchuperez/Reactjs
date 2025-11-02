import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
const { cart, totalPrice, clearCart } = useCart();
const navigate = useNavigate();
const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: ""
});
const [errors, setErrors] = useState({});
const [isProcessing, setIsProcessing] = useState(false);

useEffect(() => {
    if (cart.length === 0) {
    navigate("/");
    }
}, [cart, navigate]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value
    });
    if (errors[name]) {
    setErrors({
        ...errors,
        [name]: ""
    });
    }
};

const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
    newErrors.nombre = "El nombre es obligatorio";
    }
    
    if (!formData.email.trim()) {
    newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email inválido";
    }
    
    if (!formData.telefono.trim()) {
    newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\s/g, ""))) {
    newErrors.telefono = "Teléfono inválido (10 dígitos)";
    }
    
    if (!formData.direccion.trim()) {
    newErrors.direccion = "La dirección es obligatoria";
    }
    
    return newErrors;
};

const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
    }
    
    setIsProcessing(true);
    setTimeout(() => {
    const orderId = `ORD-${Date.now()}`;
    const orderData = {
        orderId,
        cliente: formData,
        productos: cart,
        total: totalPrice,
        fecha: new Date().toLocaleString("es-AR")
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderData));
    clearCart();
    navigate("/order-confirmation");
    }, 2000);
};

return (
    <div className="checkout-container">
    <h2>Finalizar Compra</h2>
    <div className="checkout-content">
        <div className="order-summary">
        <h3>Resumen de tu Orden</h3>
            <div className="summary-items">
            {cart.map((item) => (
            <div key={item.id} className="summary-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="summary-item-info">
                <p className="item-name">{item.nombre}</p>
                <p className="item-details">
                    {item.cantidad} x ${item.precio}
                </p>
                </div>
                <p className="item-subtotal">${item.cantidad * item.precio}</p>
            </div>
            ))}
        </div>
        <div className="summary-total">
            <span>Total:</span>
            <span className="total-amount">${totalPrice}</span>
        </div>
        </div>

        <div className="checkout-form-container">
        <h3>Datos de Envío</h3>
        <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo *</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={errors.nombre ? "input-error" : ""}
                placeholder="Juan Pérez"
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
                placeholder="juan@ejemplo.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
            <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={errors.telefono ? "input-error" : ""}
                placeholder="1123456789"
            />
            {errors.telefono && <span className="error-message">{errors.telefono}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección *</label>
            <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                className={errors.direccion ? "input-error" : ""}
                placeholder="Calle 123, Buenos Aires"
            />
            {errors.direccion && <span className="error-message">{errors.direccion}</span>}
            </div>

            <button 
            type="submit" 
            className="btn-confirmar"
            disabled={isProcessing}
            >
            {isProcessing ? "Procesando..." : "Confirmar Compra"}
            </button>
        </form>
        </div>
    </div>
    </div>
);
}

export default Checkout;