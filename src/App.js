import React from 'react';

import { Card, CardContent, Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AdvancedSearch from './pages/AdvancedSearch';
import Home from './pages/Home';

class App extends React.Component {
	render() {
		return (
			<>
				<Navbar />
				<Container>
					<Card variant='outlined'>
						<CardContent>
							{/* Switch */}
							<Switch>
								{/* Advanced Search Page */}
								<Route path="/AdvancedSearch">
									<AdvancedSearch />
								</Route>
								{/* Home Page */}
								<Route path='/'>
									<Home movies={this.props.movies} />
								</Route>
							</Switch>
						</CardContent>
					</Card>
				</Container>
			</>
		);
	}
}

export default App;