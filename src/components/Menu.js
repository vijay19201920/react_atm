import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Registrationform from './Registerform.js';
import Header from './Header.js';
import HOC from './HOC/ApiCall';
import { UserConsumer } from './Context'

class Menu extends Component {
	constructor() {
		super();

	};
	static contextType = UserConsumer
	render() {
		return (
			<div>
				<Router>
					<div>

						<Route exact path="/" component={Header} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Registrationform} />
						<Route exact path="/HOC" component={HOC} />
					</div>
				</Router>
				<UserConsumer>
					{props => { return <div>{props.name}</div> }}
				</UserConsumer>

			</div>

		)
	}
}

export default Menu;