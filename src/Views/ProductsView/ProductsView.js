import React from 'react'
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
                            <Button
                                component={Link}
                                to="/reservations"
                                className={classes.bookOnlineButton}
                                variant="contained"
                                size="small"
                                endIcon={<PlayArrowIcon style={{ marginLeft: -8 }} />}
                            >
                                Book Online
                            </Button>
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