Updatimport React from 'react';
import useStyles from './ProductListStyles';
import SingleProduct from './../Product/Product';
import { masterProductList } from './../../Data/MockData/DataProducts';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
// import ProductModal from './../ProductModal/ProductModal';


const ProductList = (props) => {


    const classes = useStyles();


    //! DO NOT DELETE. These work in conjunction with modal
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => {
    //     console.log("handleOpen is being called");
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Product container margin left */}
                <Grid item xs={1} xl={2}></Grid>
                {/* Product continer grid item */}
                <Grid item xs={10} xl={8}>
                    <Grid container spacing={5} styles={classes.mainProductGridContainer} >
                        {masterProductList.map((product) =>
                            <SingleProduct
                                // These work in conjuntion with Modal. Removing temporarily
                                // handleOpen={handleOpen}
                                // handleClose={handleClose}
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
                {/* Product Modal */}
                {/* <ProductModal open={open} onClose={handleClose} /> */}
                {/* <ProductModal open={open} handleClose={handleClose} /> */}
            </Box>
        </Box>
    );
}


ProductList.propTypes = {
};


export default ProductList;















