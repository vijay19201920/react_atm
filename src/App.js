import React, { Component } from "react";
import logo from './logo.svg';
import Header from './components/Header';
//import Registerform from './components/Registerform';
import Menu from './components/Menu';
import { UserProvider } from './components/Context';

class App extends Component {

	render() {
		const user = { name: 'ContextAPIcall', loggedIn: true };
		return (
			<div>
				<UserProvider value={user}>
					<div className="App">
							<Menu></Menu>
					</div>
				</UserProvider>
				
			</div>
		);
	}
}

export default App;
