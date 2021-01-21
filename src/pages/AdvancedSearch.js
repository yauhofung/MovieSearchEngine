import React from 'react';
import { Container, TextField } from '@material-ui/core';

class Test extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<h4>
						{/* Needs more textFields for advanced search */}
						<TextField
							variant='outlined'
							label='Genre'

						/>

						{/* Advanced submit button goes here */}

					</h4>
				</Container>
			</div>
		);
	}
}

export default Test;