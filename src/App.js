import React from 'react';
import { Container, Button } from '@material-ui/core';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import {
	Switch,
	Route,
	Link
} from "react-router-dom";
import Test from './Test';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class App extends React.Component {

	render() {
		return (
			<div>
				<Navbar />
				<Container>

					{/* The Link to="" */}

					<Link to="/Test">
						<Button style={{color: 'black', margin: '5px 0 0 5px' }}>
							<KeyboardBackspaceIcon />
						</Button>
					</Link>
					<SearchBar />

					{/* The Switch */}
					<Switch>
						<Route path="/Test">
							<Test />
						</Route>
						<Route path="/">
						</Route>
					</Switch>

				</Container>
			</div>
		);
	}
}

export default App;