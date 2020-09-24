import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
// Material ui
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Typography } from '@material-ui/core';
// Custom components and styles
import ProductList from './../../Components/ProductList/ProductList';
import Footer from './../../Components/Footer/Footer';
import useStyles from './ProductsViewStyles';


function ProductView(props) {


    const classes = useStyles();


    // To ensure the current screen opens at the top of the viewport
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Box className={classes.root}>
            <Grid container className={classes.mainGridContainer}>
                {/* Header Left Margin */}
                <Grid item></Grid>
                {/* //? Main header container (All content here) */}
                <Grid item xs={12}>
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer}>
                            <Typography variant="h3" className={classes.headerTitle}>
                                {/* Jareb likes these so add again at later date */}
                                {/* PRODUCTS */}
                            </Typography>
                            <Button
                                component={Link}
                                to="/reservations"
                                className={classes.bookOnlineButton}
                                variant="contained"
                                size="small"
                                color="primary"
                                endIcon={<PlayArrowIcon style={{ marginLeft: -8 }} />}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item></Grid>
                <Grid container>
                    {/* Product container left margin */}
                    <Grid item xs={1} sm={0}></Grid>
                    {/* MAIN PRODUCT CONTAINER */}
                    <Grid item xs={10} sm={12} className={classes.productListContainer}>
                        <ProductList />
                    </Grid>
                    {/* Product container right margin */}
                    <Grid item xs={1} sm={0}></Grid>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}


export default ProductView;