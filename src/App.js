import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import {
	Switch,
	Route,
	Link
} from "react-router-dom";
import Test from './Test';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Container>
					
					{/* The Link to="" */}

					<Link to="/Test">Test</Link>
					<br/>
					<br/>
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