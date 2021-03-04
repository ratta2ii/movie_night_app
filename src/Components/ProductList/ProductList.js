import React, { useEffect } from "react";
import useStyles from "./ProductListStyles";
import SingleProduct from "./../Product/Product";
import { masterProductList } from "./../../Data/MockData/DataProducts";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getCurrentCategory } from "../../Redux/Reducers/currentCategoryReducer";

const ProductList = (props) => {
    const classes = useStyles();
    let categoryToRender = masterProductList;
    const currentCategory = useSelector(getCurrentCategory);

    let consessions = {
        1007: 'popcorn',
        1008: 'hot dog',
        1009: 'cotton'
    };
    
    useEffect(() => {
        console.log("Current category: ", currentCategory);
    }, [currentCategory]);
    
    if (currentCategory === 'consessions') {
        categoryToRender = masterProductList.filter(product => {
            if (consessions[product.productId]) return true
        });
    }

    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Product container margin left */}
                <Grid item xs={1}></Grid>
                {/* Product continer grid item */}
                <Grid item xs={10}>
                    <Grid container styles={classes.mainProductGridContainer}>
                        {categoryToRender.map((product) => (
                            <SingleProduct
                                productId={product.productId}
                                title={product.title}
                                subTitle={product.subTitle}
                                price={product.price}
                                description={product.description}
                                mainImage={product.mainImage}
                                bullets={product.bullets}
                                id={product.id}
                                key={product.id}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Box>
            </Box>
        </Box>
    );
};

ProductList.propTypes = {};

export default ProductList;
