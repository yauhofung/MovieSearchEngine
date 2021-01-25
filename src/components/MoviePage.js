import React from 'react';

import { Grid, Typography, Card, CardContent } from '@material-ui/core';

import defaultImage from '../img/default-movie.png';

const MoviePage = (props) => {
	return (
		<Card>
			<CardContent>
				{/* centers the movie posters */}
				<Grid container>
					<Grid item xs></Grid>
					<Grid item xs>
						{
							//if props image is null:
							props.image === null ?
								//show the default image or the api's image prop.
								<img src={defaultImage} alt={'unavailable movie poster'} /> :
								<img src={`http://image.tmdb.org/t/p/w200${props.image}`} alt={'card movie poster'} />
						}
					</Grid>
					<Grid item xs></Grid>
				</Grid>

				<Typography variant='h6' noWrap='true' align='center'>
					{props.title}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default MoviePage;