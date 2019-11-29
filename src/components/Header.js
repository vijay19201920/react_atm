import React, { Component, lazy, Suspense } from 'react';
//import Form from './Form.js';
import { Link } from "react-router-dom";
const Form = lazy(() => import('./Form.js'));



class Header extends Component {

	render() {
		return (

			<div>
				<header id="header-wrap">
					<div className="container">
						<header className="text-center main-head">
							<div className="menu">

								<h1 className="floated_l">ATM Money Dispenser</h1>

								<Link to="/Login"><h1 className="floated_l">Login</h1></Link>

								<Link to="/Register"><h1 className="floated_l">Register</h1></Link>

								<Link to="/HOC"><h1 className="floated_l">HOC</h1></Link>
							</div>
						</header>
					</div>
				</header>
				<Suspense fallback={<div> ...loading </div>}>
				
					<div className="container">

						<div className="atm-main-block">
							<Form></Form>
						</div>
					</div>
				</Suspense>

			</div>

		);
	}
}

export default Header;
