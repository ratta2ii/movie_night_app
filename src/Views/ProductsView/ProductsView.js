import React, { useEffect } from 'react'
// Material ui
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
// Custom components and styles
import ProductList from './../../Components/ProductList/ProductList';
import Header from './../../Components/Header/Header';
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
            <Header />
            <Grid container className={classes.mainGridContainer}>
                <Grid container>
                    {/* Product container left margin */}
                    <Grid item xs={1} sm={0} xl={1}></Grid>
                    {/* MAIN PRODUCT CONTAINER */}
                    <Grid item xs={10} sm={12} xl={10} className={classes.productListContainer}>
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