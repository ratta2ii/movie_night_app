import React from "react";
import useStyles from "./ProductListStyles";
import SingleProduct from "./../Product/Product";
import { masterProductList } from "./../../Data/MockData/DataProducts";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const ProductList = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Product container margin left */}
                <Grid item xs={1}></Grid>
                {/* Product continer grid item */}
                <Grid item xs={10}>
                    <Grid container spacing={5} styles={classes.mainProductGridContainer}>
                        {masterProductList.map((product) => (
                            <SingleProduct
                                productId={product.productId}
                                title={product.title}
                                subTitle={product.subTitle}
                                price={product.price}
                                description={product.description}
                                mainImage={product.mainImage}
                                bullets={product.bullets}
                                id={product.id}
                                key={product.key}
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
