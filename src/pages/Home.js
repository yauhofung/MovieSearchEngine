import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

class Home extends React.Component {
	render() {
		return (
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Typography variant='h5'>
						Recommended
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Container style={{ height: '300px' }}>
						Grid goes here
					</Container>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h5'>
						Recently Added
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Container style={{ height: '4000px' }}>
						Grid goes here
					</Container>
				</Grid>
			</Grid>
		);
	}
}

export default Home;