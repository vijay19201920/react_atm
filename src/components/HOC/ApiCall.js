import React, { Component } from "react";
import Feed from './Feeds/Feed';
//import './App.css';

class HOC extends Component {

	state = { contacts: [] };

	componentDidMount() {
		fetch("https://api.randomuser.me/?results=50")
			.then(response => response.json())
			.then(parsedResponse =>
				parsedResponse.results.map(user => ({
					name: `${user.name.first} ${user.name.last}`,
					email: user.email,
					thumbnail: user.picture.thumbnail
				}))
			)
			.then(contacts => this.setState({ contacts }))
			.then(contacts => console.log(contacts));
	}

	render() {

		return (
			<div>
				<Feed contacts={this.state.contacts} />
			</div>
		);
	}
}

export default HOC;
