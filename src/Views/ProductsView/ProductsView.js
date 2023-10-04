import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import ProductList from "./../../Components/ProductList/ProductList";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import useStyles from "./ProductsViewStyles";
import Categories from "../../Components/Categories/Categories";
import { getCurrentCategory } from "./../../Redux/Reducers/currentCategoryReducer";
import { useSelector } from "react-redux";

function ProductView(props) {
    const classes = useStyles();
    const categorySelected = useSelector(getCurrentCategory);

    // To ensure the current screen opens at the top of the viewport on rendering
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    
    // Checks to see if you have a selected a category first || coming from NavBar 
    // navLink is a boolean param passed into the "Link to={}" in the Navigation component
    if (!categorySelected || props.location.navLink) {
        return (
            <Box>
                <Header />
                <Categories />
                <Footer />
            </Box>
        );
    }

    return (
        <Box className={classes.root}>
            <Header />
            <Grid container className={classes.mainGridContainer}>
                {/* Product container left margin */}
                <Grid item xs={1} sm={false} xl={1}></Grid>
                {/* MAIN PRODUCT CONTAINER */}
                <Grid
                    item
                    xs={10}
                    sm={12}
                    xl={10}
                    className={classes.productListContainer}
                >
                    <ProductList />
                </Grid>
                {/* Product container right margin */}
                <Grid item xs={1} sm={false}></Grid>
            </Grid>
            <Footer />
        </Box>
    );
}

export default ProductView;
