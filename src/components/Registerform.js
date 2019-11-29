import React, { Component } from 'react';
import Rightcolumn from './Rightcolumn.js';
import { Link } from "react-router-dom";

class Registrationform extends Component {
	constructor() {
		super();

		this.state = {
			
			loading: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);

	};


	changeHandler = event => {

		console.log(event.target.textValue);
		console.log(event.target.value);

		this.setState({

			[event.target.textValu]: event.target.value

		});

	}

	handleSubmit = (event) => {

		//alert(this.state);

		console.log(this.state);

		//  const data = new FormData(this.state);

		//console.log(data);

		fetch('http://spainoption-fint/api/register', {
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
			console.log(response.json);

		})
			.catch(error => {
				console.log(error)
			})

		event.preventDefault();
		//this function is used to restrict the form to reload
		//event.preventDefault();

	}


	render() {

		const { textValue } = this.state

		return (


			<div>
				<div> {this.state.message} </div>
				<form onSubmit={this.handleSubmit}>
					<div className="container">
						<h1 className="signin">Register</h1>
						<p>Please fill in this form to create an account.</p>
						<hr />

						<label><b>Firstname</b></label>
						<input type="text" value={textValue} onChange={this.changeHandler} placeholder="Enter Firstname" />

						<label><b>Lastname</b></label>
						<input type="text" value={textValue} onChange={this.onChange} placeholder="Enter Lastname" />

						<label ><b>Email</b></label>
						<input type="text" value={textValue} onChange={this.onChange} placeholder="Enter Email" />

						<label><b>Password</b></label>
						<input type="password" value={textValue} onChange={this.onChange} placeholder="Enter Password" />

						<label><b>country</b></label>
						<input type="text" value={textValue} onChange={this.onChange} placeholder="Enter country" />

						<label><b>state</b></label>
						<input type="text" value={textValue} onChange={this.onChange} placeholder="Enter state" />

						<label><b>zip</b></label>
						<input type="text" value={textValue} onChange={this.onChange} placeholder="Enter zip" />

						<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
						<button type="submit" value='submit' className="registerbtn">Register</button>
					</div>

					<div className="container signin">
						<p>Already have an account?.</p>
						<Link to="/"> Sign in</Link>
					</div>
				</form>
			</div>
		)


	}


}

export default Registrationform