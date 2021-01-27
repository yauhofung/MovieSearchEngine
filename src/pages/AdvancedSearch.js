import React from 'react';

import { Typography, Grid, TextField, Container, Button } from '@material-ui/core';

import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

class AdvancedSearch extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
			movies: [],
			totalResults: 0,
			currentPage: 1
		}
		this.apiKey = process.env.REACT_APP_API
	}

	handleSubmit = (event) => {
		event.preventDefault();

		// fetching from the api
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}`)
			.then(data => data.json())
			.then(data => {
				// sets the movies array to all the results
				this.setState({ movies: [...data.results], totalResults: data.total_results })
			})
	}

	handleSearchChange = (event) => {
		// changes the textfield whenever text is typed in
		if (event.target.value.length < 100) {
			this.setState({
				//assigning search each letter when inputed
				search: event.target.value
			});
		}
	}

	nextPage = (pageNumber) => {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}&page=${pageNumber}`)
			.then(data => data.json())
			.then(data => {
				// where it logs the data
				console.log(data);
				// sets the movies array to all the results
				this.setState({ movies: [...data.results], currentPage: pageNumber })
			})
	}

	render() {
		const numberPage = Math.floor(this.state.totalResults / 20)
		return (
			<Container>
				{/* Hooks to handleSubmit */}
				<form onSubmit={this.handleSubmit}>

					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Typography variant='h5' align='center'>
								Advanced Search
							</Typography>

							<TextField
								variant="filled"
								label="Search Movie"
								color="primary"
								type="text"
								value={this.state.search}
								// hooks to onChange
								onChange={(event) => { this.handleSearchChange(event); }}
								size="small"
								style={{ backgroundColor: 'white' }}

							/>
						</Grid>

						<Grid item xs={12} md={6}>
							<TextField
								variant='outlined'
								label='Title'
								placeholder='Enter movie title'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								variant='outlined'
								label='Genre'
								placeholder='Enter movie genre'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								variant='outlined'
								label='Release Year'
								placeholder='Enter movie release year'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								variant='outlined'
								label='ID'
								placeholder='Enter movie ID'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								type='submit'
								color="primary"
								variant='contained'
								fullWidth
							>
								Search
							</Button>
						</Grid>
					</Grid>
				</form>
				<MovieList movies={this.state.movies} />
				{
					this.state.totalResults > 25 ?
						<Pagination
							pages={numberPage}
							nextPage={this.nextPage}
							currentPage={this.state.currentPage}
						/> :
						<></>
				}
			</Container>
		);
	}
}

export default AdvancedSearch;