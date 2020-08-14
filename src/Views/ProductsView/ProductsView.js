import React from 'react'
import ProductList from './../../Components/ProductList/ProductList';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import useStyles from './ProductsViewStyles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import BookOnlineButton from './../../Assets/Images/book-online-button.png';





function ProductView(props) {

    
    const classes = useStyles();


    return (
        <Box>
            <Grid container>
                {/* Header left margin */}
                <Grid item xs={0} sm={1} md={2}></Grid>
                {/* Header Grid Container */}
                <Grid item xs={12} sm={10} md={8}>
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer}
                            style={{
                            }}>
                            <Typography variant="h3" className={classes.productHeaderTitle}>
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
                <Grid item xs={0} sm={1} md={2}></Grid>
                {/* MAIN PRODUCT CONTAINER */}
                <ProductList />
            </Grid>
        </Box>
    )
}


export default ProductView;