import React from 'react';

import { TextField, Container, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
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
				this.setState({
					movies: [...data.results],
					totalResults: data.total_results
				})

				//this transfers these states to /Results
				this.props.history.push({
					pathname: "/Results",
					getProps: {
						searchGet: this.state.search,
						movieGet: this.state.movies,
						totalResultsGet: this.state.totalResults,
						currentPageGet: this.state.currentPage
					}
				});
			})
	}

	handleSearchChange = (event) => {
		// changes the textfield whenever text is typed in
		this.setState({
			//assigning search each letter when inputed
			search: event.target.value
		})
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

	//for the database, we should take the genre that shows the most and plug it into 
	//https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

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
					</form>
				</Container>
			</div>
		);
	}
}

export default withRouter(SearchBar);