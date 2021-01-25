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
                        // if image prop is null: 
                        props.image == null ?
                            // return image default or return the image api prop
                            <img src={defaultImage} alt={'image unavailable'} /> :
                            <img src={`http://image.tmdb.org/t/p/w200${props.image}`} alt={'card image'} />
                    }

                    <Typography>
                        {props.title}
                    </Typography>
                </Card>
            </Grid>
        </Grid>)

}

export default MoviePage;