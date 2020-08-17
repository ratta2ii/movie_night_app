import React from 'react';
import { connect } from 'react-redux';
import useStyles from './ProductListStyles';
import SingleProduct from './../Product/Product';
import ProductModal from './../ProductModal/ProductModal';
import { masterProductList } from './../../Data/MockData/DataProducts';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';


const ProductList = (props) => {


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        console.log("handleOpen is being called");
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Product container margin left */}
                <Grid item xs={0} sm={1} md={1} xl={2}></Grid>
                {/* Product continer grid item */}
                <Grid item xs={12} sm={10} md={10} xl={8}>
                    <Grid container spacing={5} styles={classes.mainProductGridContainer} >
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
    };
};


export default connect(mapStateToProps)(ProductList);















