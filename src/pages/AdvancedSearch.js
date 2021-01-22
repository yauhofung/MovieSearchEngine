import React from 'react';

import { Button, Grid, TextField } from '@material-ui/core';

class AdvancedSearch extends React.Component {
	// calls TMDb API with advanced searches
	submitForm(event) {
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={(event) => { this.submitForm(event); }}>
				<Grid container spacing={1}>
					<Grid item xs={12} md={6}>
						<TextField
							variant='outlined'
							label='Title'
							placeholder='Enter movie title'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							variant='outlined'
							label='Genre'
							placeholder='Enter movie genre'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							variant='outlined'
							label='Release Year'
							placeholder='Enter movie release year'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							variant='outlined'
							label='ID'
							placeholder='Enter movie ID'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button type='submit' color="primary" variant='contained' fullWidth>
							Search
						</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
}

export default AdvancedSearch;