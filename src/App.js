import React from 'react';

import { Container, Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import Navbar from './components/Navbar';
import Test from './components/Test';
import SearchBar from './components/SearchBar';

class App extends React.Component {

	render() {
		return (
			<>
				<Navbar />
				<Container>

					{/* The Link to='' */}
					<Link to='/Test'>
						<Button style={{ color: 'black', margin: '5px 0 0 5px' }}>
							<KeyboardBackspaceIcon />
						</Button>
					</Link>

					<SearchBar />

					{/* The Switch */}
					<Switch>
						<Route path='/Test'>
							<Test />
						</Route>
						<Route path='/'>
						</Route>
					</Switch>

				</Container>
			</>
		);
	}
}

export default App;