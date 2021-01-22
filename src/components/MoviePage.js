import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const url = '../capstone_actualmoviepage.jpg';

const MoviePage = () => {
    <Grid container>
        <Grid item>
            <Typography variant='h2'>MovieTitle</Typography>
        </Grid>

        <Grid item>
            <img src={url} />
        </Grid>

        <Grid item>
            <Typography variant='body'>
                
            </Typography>
        </Grid>
    </Grid>

}

export default MoviePage;