import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import defaultImage from '../img/default-movie.png';

const MoviePage = (props) => {
	return (
		<Grid container direction='row'>
			<Grid item>
				<Card>
					{
						//if props image is null:
						props.image == null ?
							//show the default image or the api's image prop.
							<img src={defaultImage} alt={'unavailable movie poster'} /> :
							<img src={`http://image.tmdb.org/t/p/w200${props.image}`} alt={'card movie poster'} />
					}

					{/* displaying the card */}
					<Typography>
						{props.title}
					</Typography>

				</Card>
			</Grid>
		</Grid>
	);
}

export default MoviePage;