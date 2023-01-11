import logo from "./assets/imagenes/logo.svg";
import "./assets/css/App.css";

//import de components files
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Pelicules";

// agregamos funciones
function HolaMundo(example, edad) {
	var present2 = (
		<div>
			<h2>Hola, estoy llamando a una {example}</h2>
			<h3>tengo {edad} años</h3>
		</div>
	);

	return present2;
}

function App() {
	// puedo llamar variables
	var nombre = "Yorvis";
	var present = <h2>Hola, Soy {nombre}</h2>;
	var example = "funcion";
	var edad = 39;
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				{/* {alert("hola soy yorvis")} */}
				{present}
				{HolaMundo(example, edad)}
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<section>
				<MiComponente />
				<Peliculas />
			</section>
		</div>
	);
}

export default App;
