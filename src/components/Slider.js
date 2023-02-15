import React, { Component } from "react";

class Slider extends Component {
	state = {};
	render() {
		return (
			<div id="slider" className="slider-big">
				<h1>Welcome to react with MonkeYor</h1>
				{/* llamando la propiedad */}
				<h2>{this.props.title}</h2>
				<a href="#" className="btn-white">
					Ir blog
				</a>
				<a href="#" className="btn-white">
					{this.props.btn}
				</a>
			</div>
		);
	}
}

export default Slider;
