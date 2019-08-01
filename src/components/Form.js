import React,{Component} from 'react';
import Rightcolumn from './Rightcolumn.js';

class Form extends Component {
constructor(){
	super();

	this.state = {
		name: 0,
		}

};

handleName = (event) => {
	this.setState({
	name: event.target.value
	})
}

submit = (event) => {

	var trued = 1
	var total_amount = `${this.state.name}`
if(trued){alert(total_amount/2)}
 




	this.setState(prevState => ({
		total_amount: `${this.state.name}`
	}));


//this function is used to restrict the form to reload
event.preventDefault();

}


render(){

	const {name , place , topic } = this.state 
//using the method destruction
//value ={this.state name} is replced with {name} like aLL THE THREE INPUTS FIELD


return (
		

		<div class="row">
		<div class="col-md-6">
			<div class="atm-window">
				<h2 class="text-center">Welcome To ATM</h2>
				<form name="ATM"  onSubmit = {this.submit}>
					<div class="form-group enter-money-block">
						<label for="atmAmount">Enter the Amount</label>
						<input type="number" class="form-control" value ={name} onChange ={this.handleName} name="atmAmount" id="amount" />
					</div>
					<div class="form-group">
						<button  type = 'submit'  value ='submit' class="btn btn-primary btn-lg btn-block get-money-btn">Get Money</button>
					</div>
				</form>
			</div>
		
		</div>
						<div class="col-md-6 ">
										<Rightcolumn totalAmount= {this.state.total_amount}></Rightcolumn>
						</div>
				</div>
	) 


}


}

export default Form