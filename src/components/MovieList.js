import React from 'react';
import { Grid } from '@material-ui/core';
import MoviePage from './MoviePage';

const MovieList = (props) => {
	return (
		<Grid container spacing={1}>
			{
				props.movies.map((movie, i) => {
					return (
						<Grid item xs={12} sm={6} md={4} lg={3}>
							{/* passing in props to MoviePage component */}
							<MoviePage key={i} title={movie.title} image={movie.poster_path} />
						</Grid>
					);
				})
			}
		</Grid>
	);
}

export default MovieList;