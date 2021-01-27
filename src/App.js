import React from 'react';

import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AdvancedSearch from './pages/AdvancedSearch';
import Home from './pages/Home';
import Results from './pages/Results'

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

								<Route path="/Results">
									<Results />
								</Route>

								{/* Home Page */}
								<Route path='/'>
									<Home movies={this.props.movies} />
								</Route>
							</Switch>
						</CardContent>
					</Card>
				</Container>
				<br></br>
				<Container>
				<Typography>This product uses the TMDb API but is not endorsed or certified by TMDb</Typography>
				</Container>
			</>
		);
	}
}

export default App;