import React from 'react';

import { Grid } from '@material-ui/core';

import MoviePage from './MoviePage';

class MovieList extends React.Component {
	render() {
		return (
			<Grid container spacing={1}>
				{
					this.props.movies.map((movie, i) => {
						return (
							<Grid key={i} item xs={12} sm={6} md={4} lg={3}>
								{/* passing in props to MoviePage component */}
								<MoviePage
									key={i}
									title={movie.title}
									image={movie.poster_path}
									rating={movie.vote_average}
								/>
							</Grid>
						);
					})
				}
			</Grid>
		);
	}
}

MovieList.defaultProps = {
	movies: []
}

export default MovieList;
