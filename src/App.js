import React from 'react';
import { Container, Button } from '@material-ui/core';

import { Switch, Route, Link } from 'react-router-dom';


import Navbar from './components/Navbar';
import Test from './pages/AdvancedSearch';


class App extends React.Component {

	render() {
		return (
			<div>
				<Navbar />
				<Container style={{ padding: '70px 0 15px 15px', background: "white"}}>

					{/* The Link to='' */}


					{/* The Switch */}
					<Switch>
						<Route path="/Test">
							<Test />
						</Route>

						<Route path='/'>
							<h2>Recommended </h2>
							{/* Grid here */}
							<Container style={{height:'300px'}}>

							</Container>
							<h2>Recently Added </h2>
							<Container style={{height:'4000px'}}>

							</Container>
							{/* Grid here too */}

						</Route>
					</Switch>

				</Container>
			</div>
		);
	}
}

export default App;