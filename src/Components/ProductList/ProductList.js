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
import BookOnlineButton from './../../Assets/Images/book-online-button.png';


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


                {/* Margin left main container */}
                <Grid item xs={0} sm={1} md={1} xl={2}></Grid>
                <Grid item xs={12} sm={10} md={10} xl={8}>
                    {/* //? Main container (All content here) */}
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer}>
                            <Typography variant="h3" className={classes.productHeaderTitle}>
                                PRODUCTS
                            </Typography>
                            <Link to="/reservations">
                                <img src={BookOnlineButton}
                                    alt='book movie theatre rental online now button'
                                    className={classes.bookOnlineButton} />
                            </Link>

                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item xs={0} sm={1} md={1} xl={2}></Grid>


                {/* Product container margin left */}
                <Grid item xs={0} sm={1} md={1} xl={2}></Grid>
                {/* Product continer grid item */}
                <Grid item xs={12} sm={10} md={10} xl={8}>
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
















// import React from 'react';
// import { Link } from "react-router-dom";
// // import { Route, withRouter } from 'react-router-dom';
// import propTypes from 'prop-types';
// import { connect } from 'react-redux';
// import useStyles from './ProductListStyles';
// import SingleProduct from './../Product/Product';
// import ProductModal from './../ProductModal/ProductModal';
// import { masterProductList } from './../../Data/MockData/DataProducts';
// import { Box } from '@material-ui/core';
// import { Typography } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
// import BookOnlineButton from './../../Assets/Images/book-online-button.png';




// function ProductList(props) {


//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);



//     console.log(props.current_product);


//     const handleOpen = () => {
//         console.log("handleOpen is being called");
//         setOpen(true);
//     };


//     const handleClose = () => {
//         setOpen(false);
//     };


//     return (
//         <Box className={classes.root}>
//             <Grid container>











//                 {/* Product container margin left */}
//                 <Grid item xs={0} sm={1} md={1} xl={2}></Grid>
//                 {/* Product main container*/}
//                 <Grid item xs={12} sm={10} md={10} xl={8}>
//                     <Grid container justify="center" spacing={5} className={classes.mainGridContainer}>











//                         {masterProductList.map((product) =>
//                             <SingleProduct
//                                 handleOpen={handleOpen}
//                                 handleClose={handleClose}
//                                 productId={product.productId}
//                                 title={product.title}
//                                 price={product.price}
//                                 description={product.description}
//                                 mainImage={product.mainImage}
//                                 bullets={product.bullets}
//                                 id={product.id}
//                                 key={product.key} />
//                         )}
//                     </Grid>
//                 </Grid>
//             </Grid>
//             <Box>
//                 {/* Producr Modal */}
//                 {/* <ProductModal open={open} onClose={handleClose} /> */}
//                 <ProductModal open={open} handleClose={handleClose} />
//             </Box>
//         </Box>
//     );
// }


// ProductList.propTypes = {
// };


// const mapStateToProps = state => {
//     return {
//         // current_product: state.current_product
//     };
// };


// export default connect(mapStateToProps)(ProductList);
















