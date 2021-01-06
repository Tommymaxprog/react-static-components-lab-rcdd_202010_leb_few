import React, { Component } from 'react';
<<<<<<< HEAD
import CatComponent from './CatComponent.js';
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js'
import MouseComponent from './MouseComponent.js';
=======
import CatComponent from 'react';
import CatComponent from 'react';
>>>>>>> 258b0978eae9f0c381abdc0cbfcf689be51b634c
class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				{/* one more component missing */}
				<MouseComponent />
			</div>
		);
	}
}

export default App;
