import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

class Home extends React.Component {
	render() {
		return (
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Typography variant='h5'>
						Recommended Movies
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Container style={{ height: '300px' }}>
						(insert GridList)
					</Container>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h5'>
						Recently Added Movies
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Container style={{ height: '4000px' }}>
						(insert GridList)
					</Container>
				</Grid>
			</Grid>
		);
	}
}

export default Home;