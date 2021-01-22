import React from 'react';

import { Container, Typography } from '@material-ui/core';

class Home extends React.Component {
	render() {
		return (
			<>
				<Typography variant='h5'>
					Recommended
				</Typography>
				<Container style={{ height: '300px' }}>
					Grid goes here
				</Container>
				<Typography variant='h5'>
					Recently Added
				</Typography>
				<Container style={{ height: '4000px' }}>
					Grid goes here
				</Container>
			</>
		);
	}
}

export default Home;