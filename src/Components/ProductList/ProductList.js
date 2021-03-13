import React, { useEffect } from "react";
import { masterProductList } from "./../../Data/MockData/DataProducts";
import { Box, Button, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import useStyles from "./ProductListStyles";
import SingleProduct from "./../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import {
    getCurrentCategory,
    selectCategory,
} from "../../Redux/Reducers/currentCategoryReducer";

const ProductList = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let categoryToRender = masterProductList;
    const currentCategory = useSelector(getCurrentCategory);

    let consessions = {
        1007: "popcorn",
        1008: "hot dog",
        1009: "cotton",
    };

    useEffect(() => { }, [currentCategory]);

    const handleDeselectCategory = () => {
        dispatch(selectCategory(null));
    };

    if (currentCategory === "consessions") {
        categoryToRender = masterProductList.filter((product) => {
            if (consessions[product.productId]) return true;
        });
    }

    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Product container margin left */}
                <Grid item xs={1}></Grid>
                {/* Product container grid item */}
                <Grid item xs={10}>
                    <Button
                        className={classes.categoryBackBtn}
                        onClick={handleDeselectCategory}
                        startIcon={<ArrowBackIosIcon />}
                    >
                        Choose a New Category
                    </Button>
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
        </Box>
    );
};

ProductList.propTypes = {};

export default ProductList;
