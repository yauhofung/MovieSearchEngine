import React from 'react';

import { TextField, Container, Button } from '@material-ui/core';
import MovieList from './MovieList';

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
			movies: [],
			searchTerm: ''
		}
		this.apiKey = process.env.REACT_APP_API
	}

	handleSearchChange = (event) => {
		this.setState({
			search: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(`${this.state.search}`)

		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}`)
			.then(data => data.json())
			.then(data => {
				console.log(data);
				this.setState({ movies: [...data.results] })
			})
	}

	render() {
		return (
			<div>
				<Container>
					<form onSubmit={this.handleSubmit}>
						<TextField
							variant="filled"
							label="Search Movie"
							color="primary"
							type="text"
							value={this.state.search}
							onChange={this.handleSearchChange}
							size="small"
							style={{ backgroundColor: 'white' }}

						/>

						<Button type='submit' color='primary' variant='contained' style={{ height: '50px' }}>
							Search
						</Button>
					</form>
				</Container>
				<MovieList movies={this.state.movies} />
			</div>
		);
	}
}

export default SearchBar;