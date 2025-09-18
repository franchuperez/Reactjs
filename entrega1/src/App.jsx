import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />

      {/* Contenedor que recibe un mensaje por props */}
      <ItemListContainer saludar="¡Bienvenido!" />
    </div>
  );
}

export default App;
