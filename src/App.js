import React from 'react';

import { Card, CardContent, Container, Typography, Hidden, Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

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
					<Hidden smUp>
						<Link to='/AdvancedSearch'>
							<Button style={{ color: 'primary', margin: '5px 0 0 5px' }}>
								<SearchIcon /> Advanced Search
							</Button>
						</Link>
					</Hidden>
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