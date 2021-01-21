import React from 'react';

import { Container, Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';


import Navbar from './components/Navbar';
import Test from './components/Test';


class App extends React.Component {

	render() {
		return (
			<>
				<Navbar />
				<Container>

					{/* The Link to='' */}


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