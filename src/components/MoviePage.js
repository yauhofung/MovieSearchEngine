import React from 'react';
import Typography from '@material-ui/core/Typography';
import defaultImage from '../img/default-movie.png'

const MoviePage = (props) => {
    return (
        <>
                {
                    props.image == null ? 
                    <img src={defaultImage} alt={'poster unavailable'} /> : 
                    <img src={`http://image.tmdb.org/t/p/w200${props.image}`} alt={'card poster'} />
                }

                <Typography>
                    {
                        props.title
                    }
	            </Typography>
        </>
    );
}

export default MoviePage;
