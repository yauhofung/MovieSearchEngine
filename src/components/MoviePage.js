import React from 'react';

import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import defaultImage from '../img/default-movie.png';

const MoviePage = (props) => {
	const style = {
		poster: {
			"height": "289px"
		}
	}
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
								<img
									src={defaultImage}
									alt={'unavailable movie poster'}
									style={style.poster}
								/> :
								<img
									src={`http://image.tmdb.org/t/p/w200${props.image}`}
									alt={'card movie poster'}
									style={style.poster}
								/>
						}
					</Grid>
					<Grid item xs></Grid>
				</Grid>

				<Typography
					variant='h6'
					align='center'
					noWrap
				>
					{props.title}
				</Typography>

				{/* centers the movie ratings */}
				<Grid container>
					<Grid item xs></Grid>
					<Grid item xs>
						<Rating
							value={props.rating / 2}
							readOnly
						/>
					</Grid>
					<Grid item xs></Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default MoviePage;
