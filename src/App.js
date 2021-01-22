import React from 'react';

import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AdvancedSearch from './pages/AdvancedSearch';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Container style={{ padding: '90px 0 15px 15px', background: "white" }}>
					{/* The Switch */}
					<Switch>
						<Route path="/AdvancedSearch">
							<AdvancedSearch />
						</Route>

						<Route path='/'>
							<h2>Recommended </h2>
							{/* Grid here */}
							<Container style={{ height: '300px' }}>
								Grid goes here
							</Container>
							<h2>Recently Added </h2>
							<Container style={{ height: '4000px' }}>
								Grid goes here
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