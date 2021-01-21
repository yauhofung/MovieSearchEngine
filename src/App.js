import React from 'react';

import { Container, Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';


import Navbar from './components/Navbar';
import Test from './pages/AdvancedSearch';


class App extends React.Component {

	render() {
		return (
			<>
				<Navbar />
				<Container style={{padding: '70px 0 0 0'}}>

					{/* The Link to='' */}


					{/* The Switch */}
					<Switch>
						<Route path='/Test'>
							<Test />
						</Route>
						<Route path='/'>
							<h3>Recommended movies go here: </h3>
							{/* Grid here */}
							<h3>Recent movies go here: </h3>
							<Container style={{height:'6000px'}}>

							</Container>
							{/* Grid here too */}
						</Route>
					</Switch>

				</Container>
			</>
		);
	}
}

export default App;