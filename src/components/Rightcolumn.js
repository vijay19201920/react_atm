import React, { Component } from 'react'
import { tsImportEqualsDeclaration } from '@babel/types';

class Rightcolumn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			one: "",
			two: "",
			five: "",
			ten: "",
			twenty: "",
			fifty: "",
			hundred: "",
			twohundred: "",
			fivehundred: "",
			twothousand: "",
		}

		console.log(this.props);

	};


	render() {




		return (


			<div className="note-chart">

				<h1> {this.props.totalAmount} </h1>
				<h1> {this.props.submitedState} </h1>

				<p>You will get following amount</p>
				<table className="table">
					<tbody>
						<tr>
							<td><span id="note1"></span> {this.state.one} notes of Rs 1</td>
							<td><span id="note2"></span>{this.state.two}  notes of Rs 2</td>
						</tr>
						<tr>
							<td><span id="note5"></span> {this.state.five} notes of Rs 5</td>
							<td><span id="note10"></span>{this.state.ten} notes of Rs 10</td>
						</tr>
						<tr>
							<td><span id="note20"></span> {this.state.twenty} notes of Rs 20</td>
							<td><span id="note50"></span> {this.state.fifty} notes of Rs 50</td>
						</tr>
						<tr>
							<td><span id="note100"></span> {this.state.hundred} notes of Rs 100</td>
							<td><span id="note200"></span> {this.state.twohundred} notes of Rs 200</td>
						</tr>
						<tr>
							<td><span id="note500"></span>{this.state.fivehundred} notes of Rs 500</td>
							<td><span id="note2000"></span> {this.state.twothousand} notes of Rs 2000 </td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="2"><strong>Total notes Dispensed <span id="total"></span></strong></td>
						</tr>
					</tfoot>
				</table>
			</div>


		)


	}


}

export default Rightcolumn