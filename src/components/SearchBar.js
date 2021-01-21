import React from 'react';

import { Container, TextField, Button } from '@material-ui/core';

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movies: [],
			searchTerm: ''
		}
		this.apiKey = process.env.REACT_APP_API
	}

	handleSubmit = (e) => {
		e.preventDefault();

		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
			.then(data => data.json())
			.then(data => {
				console.log(data);
				this.setState({ movies: [...data.results] })
			})
	}

	render() {
		return (
			<Container>
				<TextField
					variant='filled'
					label='Search Movie'
					color='primary'
					fullWidth
					style={{ margin: '0 0 10px 0' }}
				/>

				<Button color='primary' variant='contained' fullWidth>
					Search
				</Button>
			</Container>
		);
	}
}

export default SearchBar;