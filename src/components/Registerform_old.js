import React,{Component} from 'react';
import Rightcolumn from './Rightcolumn.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'; 
import { userSignupRequest } from '../actions/signupActions';

class LoginRegister extends Component {
constructor(){
	super();

	this.state = {
		phone: "",
		email: "",
		password: "",
		message: ""
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

 handleSubmited(event) {
        event.preventDefault();
        this.props.userSignupRequest({...this.state})
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
		       <section id="page-title">

                    <div className="container clearfix" >
                        <h1>My Account</h1>
                        <ol className="breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Pages</a></li>
                            <li className="active"> <a href="/">Login</a></li>
                        </ol>
                    </div>

                </section>
		<div> {this.props.registerMessage} </div>
			<form onSubmit ={this.handleSubmited}>
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
						<p>Already have an account? <a href="#">Sign in</a>.</p>
					  </div>
					</form>
		</div>
	) 


}


}

function mapStateToProps(state){
      return { 
         registerMessage: state.data
      }
}
function mapDispatchToProps(dispatch) {
      return bindActionCreators({userSignupRequest: userSignupRequest}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps ) (LoginRegister);