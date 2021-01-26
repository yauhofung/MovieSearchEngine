import React from 'react';

import { Button, Grid } from '@material-ui/core';

const Pagination = (props) => {
	const pageLinks = []

	for (let i = 1; i <= props.pages + 1; i++) {
		let active = props.currentPage === i ? 'active' : '';

		pageLinks.push(
			<Grid
				className={`waves-effect ${active}`}
				direction="row"
				justify="center"
				alignItems="center"
				

				key={i}
				onClick={() => props.nextPage(i)}>
				<Button href="#">
					{i}
				</Button>

			</Grid>)
	}

	return (
		<Grid 
		container
		direction="row"
		justify="center"
		alignItems="center"
		

		spacing={2}>
			<Grid container item xs={12} sm={12}>
				{pageLinks}
			</Grid>
		</Grid>
	)
}

export default Pagination