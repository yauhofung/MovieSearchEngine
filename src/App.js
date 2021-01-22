import React from 'react';

import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AdvancedSearch from './pages/AdvancedSearch';

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
									<Typography variant='h5'>
										Recommended
									</Typography>
									<Container style={{ height: '300px' }}>
										Grid goes here
									</Container>
									<Typography variant='h5'>
										Recently Added
									</Typography>
									<Container style={{ height: '4000px' }}>
										Grid goes here
									</Container>
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