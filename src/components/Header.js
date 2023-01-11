import React, { Component } from "react";
import Logo from "../assets/imagenes/logo.svg";

class Header extends Component {
	render() {
		return (
			<header id="header">
				<div className="center">
					<div id="logo">
						<img src={Logo} className="app-logo" alt="Logotipo" />
					</div>
					<nav id="menu">
						<ul>
							<li>
								<a href="#">inicio</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">farmulario</a>
							</li>
							<li>
								<a href="#">page 1</a>
							</li>
							<li>
								<a href="#">page 2</a>
							</li>
						</ul>
					</nav>

					{/* <div className="clearfix"></div> */}
				</div>

			</header>
		);
	}
}

export default Header;
