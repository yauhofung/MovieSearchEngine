import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import defaultImage from '../img/default-movie.png'

const MoviePage = (props) => {
    return (
    <Grid container>
        <Grid item>
            {
                props.image == null ? <img src={defaultImage} alt={'card image'} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt={'card image'} />
            }
        </Grid>

        <Grid item>
            
        </Grid>

        <Grid item>
            <Typography variant='body'>
                
            </Typography>
        </Grid>
    </Grid>)

}

export default MoviePage;