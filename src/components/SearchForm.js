import React from 'react';

import { Container, TextField, Button, Grid } from '@material-ui/core';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apiKey: process.env.REACT_APP_API,
			searchTerm: '',
			movies: []
		};
	}

	// calls TMDb API
	submitForm = (event) => {
		event.preventDefault();

		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&query=${this.state.searchTerm}`)
			.then(data => data.json())
			.then(data => {
				console.log(data);
				this.setState({ movies: [...data.results] })
			})
	}

	render() {
		return (
			<Container>
				<form onSubmit={(event) => { this.submitForm(event); }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant='filled'
								label='Movie Title Search'
								placeholder='Enter name of movie'
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<Button variant='contained' color='primary' type='submit' fullWidth>
								Search
							</Button>
						</Grid>
					</Grid>
				</form>
			</Container>
		);
	}
}

export default SearchBar;