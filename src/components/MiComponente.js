// import React from 'react';
import React, { Component } from "react";

class MiComponente extends Component {
	render() {
		var nombreComp = "Componente nuevo";
		let receta = {
			nombre: "Pizza",
			ingredientes: ["tomate, ", "queso, ", "jamon"],
			calorias: 400,
		};
		return (
			// <React.Fragment>
			// 	<h1>Hola soy un {nombreComp}</h1>
			// 	<h2>Hola soy un H2</h2>
			// </React.Fragment>

			<div>
				<h1>
					hola soy un {nombreComp} dentro de una div y esta es mi{" "}
					{receta.nombre}
				</h1>
				<p>
					y mis ingredientes son {receta.ingredientes} poseo
					{" " + receta.calorias} calorias
				</p>
				<ol>
					{receta.ingredientes.map((ingrediente, i) => {
						return <li>{ingrediente}</li>;
					})}
				</ol>
				<hr />
			</div>
		);
	}
}

export default MiComponente;
