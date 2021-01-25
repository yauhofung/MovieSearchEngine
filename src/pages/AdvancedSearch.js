import React from 'react';
import { Typography, Grid, TextField, Container, Button } from '@material-ui/core';
import MovieList from '../components/MovieList';


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

		// logs the input
		console.log(`${this.state.search}`)

		// fetching from the api
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}`)
			.then(data => data.json())
			.then(data => {
				// where it logs the data
				console.log(data);
				// sets the movies array to all the results
				this.setState({ movies: [...data.results], totalResults: data.total_results })
			})
	}

	handleSearchChange = (event) => {
		// changes the textfield whenever text is typed in
		this.setState({
			//assigning search each letter when inputed
			search: event.target.value
		})
	}

	// nextPage = (pageNumber) => {
	// 	fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}&page=${pageNumber}`)
	// 		.then(data => data.json())
	// 		.then(data => {
	// 			// where it logs the data
	// 			console.log(data);
	// 			// sets the movies array to all the results
	// 			this.setState({ movies: [...data.results], currentPage: pageNumber })
	// 		})
	// }


	render() {

		return (
			<div>
				<Container>
					{/* Hooks to handleSubmit */}
					<form onSubmit={this.handleSubmit}>
						<TextField
							variant="filled"
							label="Search Movie"
							color="primary"
							type="text"
							value={this.state.search}
							// hooks to onChange
							onChange={this.handleSearchChange}
							size="small"
							style={{ backgroundColor: 'white' }}

						/>

						<Button
							type='submit'
							color='primary'
							variant='contained'
							style={{ height: '50px' }}
						>
							Search
						</Button>
                        <Grid container spacing={1}>
					<Grid item xs={12}>
						<Typography variant='h5' align='center'>
							Advanced Search
						</Typography>
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
						<Button type='submit' color="primary" variant='contained' fullWidth>
							Search
						</Button>
					</Grid>
				</Grid>
					</form>
				</Container>
				
				<MovieList movies={this.state.movies} />
			</div>
		);
	}
}

export default AdvancedSearch;