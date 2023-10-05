import React from 'react'
import Box from '@material-ui/core/Box';
import StyledCard from './../../Components/StyledCard/StyledCard';
import useStyles from './SingleProductViewStyles';
import { Fragment } from 'react';
import { useEffect } from 'react';

const SingleProductView = (props) => {
    const classes = useStyles();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            {/* <Header /> */}
            <Box className={classes.root}>
                <StyledCard {...props} />
            </Box>
        </Fragment>
    );
}

export default SingleProductView;