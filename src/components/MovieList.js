import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import MoviePage from './MoviePage';

class MovieList extends React.Component {
    render() {
        return (
            <Grid container direction='row'>
                <Grid item direction='column' sm={12}>
                    {
                        this.props.movies.map((movie, i) => {
                            return (
                                <MoviePage key={i} title={movie.title} image={movie.poster_path} />
                            );
                        })
                    }
                </Grid>
            </Grid>
            );
        }
}

MovieList.defaultProps = {
    movies: []
}

export default MovieList;
