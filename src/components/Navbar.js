import React from 'react';

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from './SearchBar';

class Navbar extends React.Component {
	render() {
		return (
			<AppBar position='sticky' color='primary'>
				<Toolbar>
					<IconButton color='secondary' >
						<Link to='/' color='primary'>
							<HomeIcon style={{ color: 'white' }} />
						</Link>
					</IconButton>

					<Typography variant='h5' style={{ flexGrow: 1 }}>
						Movie Search Engine
					</Typography>

					<Link to='/AdvancedSearch'>
						<Button style={{ color: 'white', margin: '5px 0 0 5px' }}>
							<SearchIcon /> Advanced Search
						</Button>
					</Link>

					<SearchBar />

					<Button color='secondary' variant='contained' >
						Login
					</Button>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Navbar;