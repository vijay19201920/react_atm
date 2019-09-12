import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Registrationform from './Registerform.js';


class Menu extends Component {
	constructor() {
		super();

	};

	render() {
		return (
			<div>
				<Router>
					<div>
						<Route exact path="/" component={Login} />
						<Route exact path="/register" component={Registrationform} />
					</div>
				</Router>
			</div>

		)
	}
}

export default Menu;