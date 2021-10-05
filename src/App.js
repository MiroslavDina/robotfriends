import React from 'react';
import CardList from './CardList';
import SearchBox from '/SearchBox';
import { robots } from './robots';

const App = () => {
	return (
		<div className='tc'>
			<h1>RoboFrineds</h1>
			<searchBox />
			<CardList robots={robots}/>
		</div>
	);
}

export default App;