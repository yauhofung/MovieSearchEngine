import React from 'react';

import { Button, Grid } from '@material-ui/core';

const Pagination = (props) => {
	const pageLinks = []

	for (let i = 1; i <= props.pages + 1; i++) {
		let active = props.currentPage === i ? 'active' : '';

		pageLinks.push(
			<Grid
				className={`waves-effect' ${active}`}
				key={i}
				onClick={() => props.nextPage(i)}>
				<Button href="#">
					{i}
				</Button>
			</Grid>)
	}

	return (
		<Grid container>
			<Grid item xs={1}>
				{pageLinks}
			</Grid>
		</Grid>
	)
}

export default Pagination