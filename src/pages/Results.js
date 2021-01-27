import React from 'react';
import { withRouter } from 'react-router-dom';
import MovieList from '../components/MovieList';

const Results = (props) => {


    return (
	<div>
        <MovieList movies={props.history.location.getProps.movieGet} />
	</div>
    )
}


export default withRouter(Results);