import React from 'react';

import { Button, Grid } from '@material-ui/core';

const Pagination = (props) => {
	const pageLinks = [];

	for (let i = 1; i <= props.pages + 1; i++) {
		let active = props.currentPage === i ? 'active' : '';

		pageLinks.push(
			<Grid
				key={i}
				className={`waves-effect ${active}`}
				onClick={() => props.nextPage(i)}
			>
				<Button href="#">
					{i}
				</Button>
			</Grid>
		);
	}

	return (
		<Grid container spacing={2}>
			<Grid container item xs={12}>
				{pageLinks}
			</Grid>
		</Grid>
	);
}

export default Pagination;