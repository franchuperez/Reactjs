import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget() {
const { totalQuantity } = useCart();

return (
    <Link to="/cart" className="cart-widget">
    Tú Carrito
    {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
    </Link>
);
}

export default CartWidget;
