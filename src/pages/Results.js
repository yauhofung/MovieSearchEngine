import React from 'react';
// imported props here
import { withRouter } from 'react-router-dom';
import MovieList from '../components/MovieList';

const Results = (props) => {
    // console logs all the stuff assigned from SearchBar
    console.log(props.history.location)

    return (
	<div>
        {/* linked to movies, movies gets the [..data.results] */}
        <MovieList movies={props.history.location.getProps.movieGet} />
	</div>
    )
}

// with router stuff
export default withRouter(Results);