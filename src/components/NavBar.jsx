import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
return (
    <nav className="navbar">
    <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/categoria/herramientas">Herramientas</Link>
        <Link to="/categoria/insumos">Insumos</Link>
    </div>
    <CartWidget />
    </nav>
);
}

export default NavBar;
