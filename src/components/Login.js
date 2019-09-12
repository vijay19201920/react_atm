import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);

	};



	handleEmail = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	handlePassword = (event) => {
		this.setState({
			password: event.target.value
		})
	}

	handleSubmit = (event) => {

		//alert(this.state);

		console.log(this.state);


		event.preventDefault();
		//  const data = new FormData(this.state);

		//console.log(data);

		fetch('http://spainoption-fint/api/login', {
			method: 'POST',
			// mode :'no-cors',  
			headers: {
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true',
				'credentials': 'same-origin'
			},
			body: JSON.stringify(this.state)
		}).then(response => {
			console.log(response);
			console.log(response.UserName);
			console.log(response.status);
			this.setstate({
				message: response.status

			})


		})
			.catch(error => {
				console.log(error)
			})


		//this function is used to restrict the form to reload
		//event.preventDefault();

	}


	render() {

		const { email, password } = this.state

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="container">
						<h1 className="signin">Login</h1>
						<p>Please Login into your account.</p>
						<hr />

						<label ><b>Email</b></label>
						<input type="text" value={email} onChange={this.handleEmail} required placeholder="Enter Email" />

						<label><b>Password</b></label>
						<input type="password" value={password} onChange={this.handlePassword} required placeholder="Enter Password" />

						<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
						<button type="submit" value='submit' className="loginbtn">Login</button>
					</div>

					<div className="container signin">
						<p>Do not have an account?</p>
					
							<Link to="/Register"> Register here</Link>
						
					</div>
				</form>
			</div>
		)


	}


}

export default Login