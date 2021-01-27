import React from 'react';
// imported props here
import { withRouter } from 'react-router-dom';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Results = (props) => {
    // console logs all the stuff assigned from SearchBar
    console.log(props.history.location)
    const numberPage = Math.floor(props.history.location.getProps.totalResultsGet / 20);

    return (
	<div>
        {/* linked to movies, movies gets the [..data.results] */}
        <MovieList movies={props.history.location.getProps.movieGet} />
        {
					this.state.totalResults > 20 ?
						<Pagination
							pages={numberPage}
							nextPage={this.nextPage}
							currentPage={props.history.location.getProps.currentPageGet}
						/> :
						''
		}
	</div>
    )
}

// with router stuff
export default withRouter(Results);