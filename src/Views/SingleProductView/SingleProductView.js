import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box';
import StyledCard from './../../Components/StyledCard/StyledCard';
import useStyles from './SingleProductViewStyles';


const SingleProductView = (props) => {


    const classes = useStyles();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Box className={classes.root}>
            <StyledCard {...props} />
        </Box>
    );
}


export default SingleProductView;



