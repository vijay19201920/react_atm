import React, { Component } from 'react';
import Form from './Form.js';
import { Link } from "react-router-dom";


class Header extends Component {

	render() {
		return (
			<div>
				<header id="header-wrap">
					<div class="container">
						<header class="text-center main-head">
						<div class = "menu">
						
							<h1 class= "floated_l">ATM Money Dispenser</h1>
							
							<Link to="/Login"><h1 class= "floated_l">Login</h1></Link>
							
							<Link to="/Register"><h1 class= "floated_l">Register</h1></Link>
							
							<Link to="/HOC"><h1 class= "floated_l">HOC</h1></Link>
						</div>
						</header>
					</div>
				</header>
				<div class="container">

					<div class="atm-main-block">
						<Form></Form>
					</div>
				</div>

			</div>
		);
	}
}

export default Header;
