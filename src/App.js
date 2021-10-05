import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


// const App = () => {
// 	return (
// 		<div className='tc'>
// 			<h1>RoboFrineds</h1>
// 			<SearchBox />
// 			<CardList robots={robots}/>
// 		</div>
// 	);
// }

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
	searchfield: ''
		}
	}


	onSearchChange(event) {
		console.log(event.target.value);
	}	

	render() {
		return (
			<div className='tc'>
	 			<h1>RoboFrineds</h1>
	 			<SearchBox searchChange={this.onSearchChange}/>
	 			<CardList robots={this.state.robots}/>
 			</div>
			);
	}
}

export default App;