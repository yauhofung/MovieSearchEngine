import React from 'react';
import { Grid } from '@material-ui/core';
import MoviePage from './MoviePage';

const MovieList = (props) => {
    return (
        <Grid container direction='row'>
            <Grid item direction='column' sm={12}>
                {
                    props.movies.map((movie, i) => {
                        return (
                            // passing these data into MoviePage
                            <MoviePage
                                key={i}
                                title={movie.title}
                                image={movie.poster_path} />
                        );
                    })
                }
            </Grid>
        </Grid>
    );
}

export default MovieList;