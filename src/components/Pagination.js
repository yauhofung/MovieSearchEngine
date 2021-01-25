import React from 'react';
import { Grid } from '@material-ui/core';

const Pagination = (props) => {
    const pageLinks = []

    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage == i ? 'active' : '';

        pageLinks.push(
            <Grid
                className={`waves-effect' ${active}`}
                key={i}
                onClick={() => props.nextPage(i)}>
                <a href="#">{i}
                </a>
            </Grid>)
    }

    return (
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    {pageLinks}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Pagination