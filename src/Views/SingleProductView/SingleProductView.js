import React from 'react'
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import StyledCard from './../../Components/StyledCard/StyledCard';
import useStyles from './SingleProductViewStyles';
import { getCurrentProduct } from '../../Redux/Reducers/currentProductReducer';


const SingleProductView = (props) => {


    //! Remove console statements !\\
    // console.log("SingleProductProps: ", props);
    // console.log("currentProduct: ", currentProduct);
    // console.log("selectProduct: ", selectProduct);
    const currentProduct = useSelector(getCurrentProduct);
    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <StyledCard {...props} />
        </Box>
    );
}


export default SingleProductView;



