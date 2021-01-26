import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import MovieList from '../components/MovieList';

class Home extends React.Component {

	render() {
		return (
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<MovieList movies={this.props.movies} />
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h5'>
						Recommended Movies
						{/* Recommended movies should store genres and then pass them into the api. We want it limited too, however. */}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Container style={{ height: '300px' }}>
						(insert GridList)
					</Container>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h5'>
						Recently Added Movies
						{/* This one shouldn't be too hard, provided that movieDB has a search by release date */}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Container style={{ height: '4000px' }}>
						(insert GridList)
					</Container>
				</Grid>

			</Grid>
		);
	}
}

export default Home;