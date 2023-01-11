import React, { Component } from "react";
import MesajeStatico from "./MensajeStatico";

class Peliculas extends Component {
	state = {};
	render() {
		return (
			<div>
				<h4>soy el componente peliculas</h4>
				<MesajeStatico />
			</div>
		);
	}
}

export default Peliculas;
