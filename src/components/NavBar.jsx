import { Link } from "react-router-dom";

function NavBar() {
return (
    <nav>
    <Link to="/">Inicio</Link> |{" "}
    <Link to="/categoria/herramientas">Herramientas</Link> |{" "}
    <Link to="/categoria/insumos">Insumos</Link>
    </nav>
);
}

export default NavBar;
