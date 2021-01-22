import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import defaultImage from '../img/default-movie.png'

class MoviePage extends React.Component {
    render(){
        return (
            <Grid container direction='row'>
                <Grid item>
                    <Card>
                        {
                            this.props.image == null ? 
                            <img src={defaultImage} alt={'image unavailable'} /> : 
                            <img src={`http://image.tmdb.org/t/p/w200${this.props.image}`} alt={'card image'} />
                        }

                        <Typography>
                            {
                                this.props.title
                            }
                        </Typography>
                    </Card>
                </Grid>
            </Grid>);
        }
}

export default MoviePage;