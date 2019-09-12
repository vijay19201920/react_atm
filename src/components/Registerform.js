import React,{Component} from 'react';
import Rightcolumn from './Rightcolumn.js';
import { Link } from "react-router-dom";

class Registrationform extends Component {
constructor(){
	super();

	this.state = {
		phone: "",
		email: "",
		password: "",
		message: "inicial"
		};
		
this.handleSubmit = this.handleSubmit.bind(this);

};

handlePhone = (event) => {
	this.setState({
	phone: event.target.value
	})
}

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
            console.log(response);
			console.log(response.UserName);
			console.log(response.status);
			this.setstate({
				message : response.status
				
			})
			
			
		})
        .catch(error =>{
            console.log(error)
        })


//this function is used to restrict the form to reload
//event.preventDefault();

}


render(){

	const {phone , email , password } = this.state 

return (
		

		<div>
		<div> {this.state.message} </div>
			<form onSubmit ={this.handleSubmit}>
					  <div className="container">
						<h1 className = "signin">Register</h1>
						<p>Please fill in this form to create an account.</p>
						<hr/>
						
						<label><b>Phone</b></label>
						<input type="text" value = {phone} onChange = {this.handlePhone} placeholder="Enter Phone number"  />
						
						<label ><b>Email</b></label>
						<input type="text" value = {email} onChange = {this.handleEmail} placeholder="Enter Email" />

						<label><b>Password</b></label>
						<input type="password" value = {password} onChange = {this.handlePassword} placeholder="Enter Password"  />

						<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
						<button type="submit" value ='submit' className="registerbtn">Register</button>
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