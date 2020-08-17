import React from 'react'
// import propTypes from 'prop-types';
import { Link } from "react-router-dom";
// Material ui
import useStyles from './ProductsViewStyles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
// Custom components and media
import ProductList from './../../Components/ProductList/ProductList';
import Footer from './../../Components/Footer/Footer';
import BookOnlineButton from './../../Assets/Images/book-online-button-rectangle.png';


function ProductView(props) {


    const classes = useStyles();


    return (
        <Box>
            <Grid container className={classes.mainGridContainer}>
                {/* Header Left Margin */}
                <Grid item xs={0}></Grid>
                {/* //? Main header container (All content here) */}
                <Grid item xs={12}>
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer}>
                            <Typography variant="h3" className={classes.headerTitle}>
                                PRODUCTS
                            </Typography>
                            <Link to="/reservations">
                                <img src={BookOnlineButton}
                                    alt='book movie theatre rental online now button'
                                    className={classes.bookOnlineButton} />
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item xs={0}></Grid>

                {/* MAIN PRODUCT CONTAINER */}
                <ProductList />
            </Grid>
            <Footer />
        </Box>
    )
}


export default ProductView;