import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
const context = useContext(CartContext);
if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
}
return context;
};

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

useEffect(() => {
    console.log("Carrito actualizado:", cart);
}, [cart]);

const addToCart = (item, cantidad) => {
    console.log("Agregando al carrito:", item, "Cantidad:", cantidad);
    
    const itemExistente = cart.find(prod => prod.id === item.id);
    
    if (itemExistente) {
    const cartActualizado = cart.map(prod =>
        prod.id === item.id
        ? { ...prod, cantidad: prod.cantidad + cantidad }
        : prod
    );
    setCart(cartActualizado);
    console.log("Producto actualizado en carrito");
    } else {
    setCart([...cart, { ...item, cantidad }]);
    console.log("Producto nuevo agregado al carrito");
    }
};

const removeItem = (id) => {
    console.log("Eliminando producto con id:", id);
    setCart(cart.filter(prod => prod.id !== id));
};

const clearCart = () => {
    console.log("Vaciando carrito");
    setCart([]);
};

const totalQuantity = cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  const totalPrice = cart.reduce((acc, prod) => acc + (prod.cantidad * prod.precio), 0);

console.log("Total cantidad:", totalQuantity, "Total precio:", totalPrice);

return (
    <CartContext.Provider
    value={{ 
        cart, 
        addToCart, 
        removeItem, 
        clearCart, 
        totalQuantity, 
        totalPrice 
    }}
    >
    {children}
    </CartContext.Provider>
);
};