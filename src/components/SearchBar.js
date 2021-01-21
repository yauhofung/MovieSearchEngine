import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';


class SearchBar extends React.Component {
	constructor() {
		super()
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
			<div>
				<Container>
					<TextField
						variant="filled"
						label="Search Movie"
						color="primary"

						size="small"
						style={{backgroundColor: 'white'}}


					/>

					<Button
						color='primary'
						variant='contained'
						style={{height: '50px'}}
						>

						Search
						</Button>
				</Container>
			</div>
		);
	}
}

export default SearchBar;