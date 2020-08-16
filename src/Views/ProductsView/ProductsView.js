import React from 'react'
import ProductList from './../../Components/ProductList/ProductList';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import useStyles from './ProductsViewStyles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import BookOnlineButton from './../../Assets/Images/book-online-button.png';
import Footer from './../../Components/Footer/Footer';





function ProductView(props) {


    const classes = useStyles();


    return (
        <Box>
            <Grid container className={classes.mainGridContainer}>
                {/* MAIN PRODUCT CONTAINER */}
                <ProductList />
            </Grid>
            <Footer />
        </Box>
    )
}


export default ProductView;