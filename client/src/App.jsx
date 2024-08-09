// importaciones 
import "./App.css";
import axios from "axios";
import productos from "./productos.json";


// funcion de compra asincrona 
function App() {
  const FuncionComprar = async (producto) => {
    const response = await axios.post(
      "http://localhost:4000/Mercado_Pago",
      producto
    );

    window.location.href = response.data;
  };

  // Renderizamos el producto 
  return (
    <div className="ContainerSuperior">
      {productos.map((e) => (
        <div className="ContainerProducto">
          <img src={e.imagen} />
          <p>{e.nombre}</p>
          <p>{`$ ${e.precio}`}</p>

          <button onClick={() => FuncionComprar(e)}>Comprar</button>
        </div>
      ))}
    </div>
  );
}

export default App;