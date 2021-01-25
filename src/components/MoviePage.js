import React from 'react';

import { Typography, Card, CardContent } from '@material-ui/core';

import defaultImage from '../img/default-movie.png';

const MoviePage = (props) => {
	return (
		<Card>
			<CardContent>
				{
					//if props image is null:
					props.image == null ?
						//show the default image or the api's image prop.
						<img src={defaultImage} alt={'unavailable movie poster'} /> :
						<img src={`http://image.tmdb.org/t/p/w200${props.image}`} alt={'card movie poster'} />
				}

				{/* displaying the card */}
				<Typography align='center'>
					{props.title}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default MoviePage;