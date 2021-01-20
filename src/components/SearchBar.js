import React from 'react';
import { Container, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
	render() {
		return (
			<div>
				<Container>
                    <TextField 
                    variant="filled"
                    label="Search Movie"
                    color="primary"
                    fullWidth="true"
                    />
				</Container>
			</div>
		);
	}
}

export default SearchBar;