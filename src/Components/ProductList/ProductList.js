import React from 'react';
import { Link } from "react-router-dom";
// import { Route, withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from './ProductListStyles';
import SingleProduct from './../Product/Product';
import ProductModal from './../ProductModal/ProductModal';
import { masterProductList } from './../../Data/MockData/DataProducts';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';




function ProductList(props) {


    const styles = useStyles();
    const [open, setOpen] = React.useState(false);



    console.log(props.current_product);


    const handleOpen = () => {
        console.log("handleOpen is being called");
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Box className={styles.productListComponent}>
            <Grid container>
                {/* Product container margin left */}
                <Grid item xs={0} sm={1} md={2}></Grid>
                {/* Product continer grid item */}
                <Grid item xs={12} sm={10} md={8}>
                    <Grid container justify="center" spacing={5}>
                        {masterProductList.map((product) =>
                            <SingleProduct
                                handleOpen={handleOpen}
                                handleClose={handleClose}
                                productId={product.productId}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                mainImage={product.mainImage}
                                bullets={product.bullets}
                                id={product.id}
                                key={product.key} />
                        )}
                    </Grid>
                </Grid>
            </Grid>
            <Box>
                {/* Producr Modal */}
                {/* <ProductModal open={open} onClose={handleClose} /> */}
                <ProductModal open={open} handleClose={handleClose} />
            </Box>
        </Box>
    );
}


ProductList.propTypes = {
};


const mapStateToProps = state => {
    return {
        // current_product: state.current_product
    };
};


export default connect(mapStateToProps)(ProductList);
















