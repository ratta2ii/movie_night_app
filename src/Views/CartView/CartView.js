import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
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
    const { currentCartList, cartTotalState } = props;
    let emptyCart = true;
    let content;
    let buttonGroup;
    let cartReceipt;

    // loading indicator time delay
    const sleep = (delay) => {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const calculateTaxes = (amount) => {
        let AZtaxes = 0.0805;
        let totalTaxes = amount * AZtaxes;
        return totalTaxes.toFixed(2);
    };

    const calculateGrandTotal = (amount) => {
        let taxes = parseInt(calculateTaxes(cartTotalState));
        let grandTotal = taxes + cartTotalState;
        return parseInt(grandTotal).toFixed(2);
    };

    const handleRedirect = async (url) => {
        if(!loading) 
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
                        Your cart is empty!
                    </Typography>
                    {/* Return to products container */}
                    <Box className={classes.productsButtonContainer}>
                        <Button
                            color="primary"
                            component={Link}
                            to="/products"
                            className={classes.productsButton}
                            label="home"
                        >
                            Go To Products
                        </Button>
                    </Box>
                </Fragment>
            );
        } else {
            emptyCart = false;
            content = <CartList />;
        }

        buttonGroup = (
            <Box>
                <Grid container>
                    <Grid item xs={6}>
                        <ButtonLoading
                            customClassName={classes.backToProductsButton2}
                            eventName={() => handleRedirect("/products")}
                            size="xx-small"
                            name="Back To Products"
                            startIcon={<ArrowBackIcon />}
                        />
                        <ButtonLoading
                            customClassName={classes.checkOutButton}
                            eventName={() => handleRedirect("/reservations")}
                            size="xx-small"
                            name="Check Out"
                            startIcon={<CreditCardIcon />}
                        />
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </Box>
        );
    }

    cartReceipt = (
        <Box className={classes.receiptContainer}>
            <Grid container>
                <Grid item xs={8}>
                    <Typography className={classes.cartTitle}>Cart Total: $</Typography>
                </Grid>
                <Grid item xs={4} className={classes.valueGridItem}>
                    <Typography className={classes.cartValue}>
                        {cartTotalState.toFixed(2)}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography className={classes.cartTitle}>Taxes: $</Typography>
                </Grid>
                <Grid item xs={4} className={classes.valueGridItem}>
                    <Typography className={classes.cartValue}>
                        {calculateTaxes(cartTotalState)}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography className={classes.grandTotalTitle}>
                        Grand Total: $
                    </Typography>
                </Grid>
                <Grid item xs={4} className={classes.grandTotalGridItem}>
                    <Typography className={classes.cartValue}>
                        {calculateGrandTotal(cartTotalState)}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );

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
                    <Paper className={classes.contentPaperContainer}>
                        {content}
                        {!emptyCart ? cartReceipt : null}
                        {!emptyCart ? buttonGroup : null}
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
