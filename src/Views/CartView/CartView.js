import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ButtonLoading from "./../../Components/ButtonLoading/ButtonLoading";
import CartList from "./../../Components/CartList/CartList";
import Header from "./../../Components/Header/Header";
import useStyles from "./CartViewStyles";
//? Mapped state to props instead of the selector here (updates coming ???)
// const currentCartList = useSelector(getCurrentCartList);
// const cartTotalState = useSelector(getCartTotalState);
// import { useSelector } from 'react-redux';
// import { getCurrentCartList } from '../../Redux/Reducers/currentCartListReducer';
// import { getCartTotalState } from '../../Redux/Reducers/currentCartListReducer';

const CartView = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const { currentCartList, cartTotalState } = props;
    let emptyCart = true;
    let content;

    // loading indicator time delay
    const sleep = (delay) => {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentCartList]);

    const handleRedirect = async (url) => {
        if (!loading)
            setLoading(true);
        await sleep(400);
        history.push(url);
        setLoading(false);
    };

    //! cartList component renders only if there are items in the cart/cartList
    if (currentCartList) {
        if (Object.keys(currentCartList).length < 1) {
            content = (
                <Fragment>
                    <Typography variant="h5" className={classes.emptyCartText}>
                        Shopping cart is currently empty...
                    </Typography>
                </Fragment>
            );
        } else {
            emptyCart = false;
            content = <CartList />;
        }
    }

    //! Cart Receipt not in use, so neither are these 2 funcs
    // const calculateTaxes = (amount) => {
    //     let AZtaxes = 0.0805;
    //     let totalTaxes = amount * AZtaxes;
    //     return totalTaxes.toFixed(2);
    // };

    // const calculateGrandTotal = (amount) => {
    //     let taxes = parseInt(calculateTaxes(cartTotalState));
    //     let grandTotal = taxes + cartTotalState;
    //     return parseInt(grandTotal).toFixed(2);
    // };
            
    //! Cart receipt currently not in use. To render, use this {!emptyCart ? cartReceipt : null}
    // const cartReceipt = (
    //     <Box className={classes.receiptContainer}>
    //         <Grid container>
    //             <Grid item xs={8}>
    //                 <Typography className={classes.cartTitle}>Cart Total: $</Typography>
    //             </Grid>
    //             <Grid item xs={4} className={classes.valueGridItem}>
    //                 <Typography className={classes.cartValue}>
    //                     {cartTotalState.toFixed(2)}
    //                 </Typography>
    //             </Grid>
    //             <Grid item xs={8}>
    //                 <Typography className={classes.cartTitle}>Taxes: $</Typography>
    //             </Grid>
    //             <Grid item xs={4} className={classes.valueGridItem}>
    //                 <Typography className={classes.cartValue}>
    //                     {calculateTaxes(cartTotalState)}
    //                 </Typography>
    //             </Grid>
    //             <Grid item xs={8}>
    //                 <Typography className={classes.grandTotalTitle}>
    //                     Grand Total: $
    //                 </Typography>
    //             </Grid>
    //             <Grid item xs={4} className={classes.grandTotalGridItem}>
    //                 <Typography className={classes.cartValue}>
    //                     {calculateGrandTotal(cartTotalState)}
    //                 </Typography>
    //             </Grid>
    //         </Grid>
    //     </Box>
    // );

    let checkOutButton = null;
    if (!emptyCart) {
        checkOutButton = (
            <Box className={classes.checkOutButtonContainer}>
                <ButtonLoading
                    customClassName={classes.checkOutButton}
                    eventName={() => handleRedirect("/reservations")}
                    name="Go to Checkout"
                    startIcon={<CreditCardIcon />}
                />
            </Box>
        );
    }

    return (
        <Box className={classes.root}>
            <Header />
            <Grid container>
                {/* Margin Left */}
                <Grid item xs={1} sm={1} md={2} lg={3}></Grid>
                {/* MAIN cartList CONTAINER */}
                <Grid
                    item
                    xs={10}
                    sm={10}
                    md={8}
                    lg={6}
                    className={classes.mainGridContent}
                >
                    <Paper 
                        className={classes.contentPaperContainer}
                        style={{ height: (Object.keys(currentCartList).length > 4) ? 830 : 560 }} 
                    >
                        {content}
                        <Box className={classes.backToProductsButtonContainer}>
                            <ButtonLoading
                                customClassName={classes.backToProductsButton}
                                eventName={() => handleRedirect("/products")}
                                name="Back To Products"
                                startIcon={<ArrowBackIcon />}
                            />
                        </Box>
                        {checkOutButton}
                    </Paper>
                </Grid>
                {/* Margin Right */}
                <Grid item xs={1} sm={1} md={2} lg={3}></Grid>
            </Grid>
            <Grid item sm={1} md={2}></Grid>
            <Grid item xs={12} sm={10} md={8}></Grid>
        </Box>
    );
};

CartView.propTypes = {};

const mapStateToProps = (state) => {
    return {
        currentCartList: state.currentCartList.value,
        cartTotalState: state.currentCartList.cartTotalState,
    };
};

export default connect(mapStateToProps)(withRouter(CartView));
