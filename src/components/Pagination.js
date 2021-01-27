import React from 'react';

import { Button, Grid } from '@material-ui/core';

const Pagination = (props) => {
	const pageLinks = [];
	const leftArrow = '\u3008';
	const rightArrow = '\u3009';

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
		<>


			<Grid container spacing={2}>
				{
					props.currentPage > 1 ?
						<Grid item xs={12}
							onClick={() => props.nextPage(props.currentPage - 1)}
						>
							<Button href="#">
								{leftArrow}
							</Button>
						</Grid> :
						''
				}
				<Grid container item xs={12}>
					{pageLinks}
				</Grid>
				{
					props.currentPage < props.pages + 1 ?
						<Grid item xs={12}
							onClick={() => props.nextPage(props.currentPage + 1)}
						>
							<Button href="#">
								{rightArrow}
							</Button>
						</Grid> :
						''
				}
			</Grid>

		</>
	);
}

export default Pagination;