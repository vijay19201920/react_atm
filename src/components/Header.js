import React, { Component } from 'react';
import Form from './Form.js';



class Header extends Component {

	render() {
		return (
			<div>
				<header id="header-wrap">
					<div class="container">
						<header class="text-center main-head">
							<h1>ATM Money Dispenser</h1>
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
