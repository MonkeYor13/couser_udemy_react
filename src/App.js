import logo from "./logo.svg";
import "./App.css";

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
				{/* puedeo agregar alERTAS, llamar objetos de HTML y funciones */}
				{alert("hola soy yorvis")}
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
		</div>
	);
}

export default App;
