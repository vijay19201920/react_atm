import React, { Component } from 'react';
import Rightcolumn from './Rightcolumn.js';

class Form extends Component {
	constructor() {
		super();

		this.state = {
			name: 0,
			submited:false,
			total_amount:0
		}

	};

	handleName = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	submit = (event) => {

		this.setState({total_amount: `${this.state.name}`, submited:true});
		

		//this function is used to restrict the form to reload
		event.preventDefault();

	}

	componentDidMount(){
		console.log('hello1');
}


	render() {

		const { name, place, topic } = this.state
		//using the method destruction
		//value ={this.state name} is replced with {name} like aLL THE THREE INPUTS FIELD


		return (


			<div className="row">
				<div className="col-md-6">
					<div className="atm-window">
						<h2 className="text-center">Welcome To ATM</h2>
						<form name="ATM" onSubmit={this.submit}>
							<div className="form-group enter-money-block">
								<label label="atmAmount">Enter the Amount</label>
								<input type="number" className="form-control" value={name} onChange={this.handleName} name="atmAmount" id="amount" />
							</div>
							<div className="form-group">
								<button type='submit' value='submit' className="btn btn-primary btn-lg btn-block get-money-btn">Get Money</button>
							</div>
						</form>
					</div>

				</div>
				<div className="col-md-6 ">
					<Rightcolumn submitedState = {this.state.submited} totalAmount={this.state.total_amount}></Rightcolumn>
				</div>
			</div>
		)


	}


}

export default Form