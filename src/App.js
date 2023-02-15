import React from "react";
import "./assets/css/App.css";

//import de components files
import Header from "./components/Header";
import {Peliculas} from "./components/Peliculas" 
import Slider from "./components/Slider";
import {Peliculas2} from "./components/Peliculas2"

function App() {
var buttonString ='menu'
	return (
		<div className="App">
			<Peliculas2 />
			<Header />
			<Slider
			title="Welcome to react with props"
			btn= {buttonString}
			/>
			<Peliculas/>
		</div>
	);
}

export default App;
