import React, { Fragment, useEffect } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CartList from './../../Components/CartList/CartList';
import useStyles from './CartViewStyles';
// import { useSelector } from 'react-redux';
// import { getCurrentCartList } from '../../Redux/Reducers/currentCartListReducer';
// import { getCartTotalState } from '../../Redux/Reducers/currentCartListReducer';


const CartView = (props) => {


    const classes = useStyles();
    const { currentCartList, cartTotalState } = props;
    console.log({currentCartList: currentCartList});
    //? Mapped state to props instead of the selector here (updates coming ???)
    // const currentCartList = useSelector(getCurrentCartList);
    // const cartTotalState = useSelector(getCartTotalState);
    let emptyCart = true;
    let content;
    let buttonGroup;
    let cartReceipt;


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const calculateTaxes = (amount) => {
        let AZtaxes = 0.0805;
        let totalTaxes = amount * AZtaxes;
        return totalTaxes.toFixed(2);
    }


    const calculateGrandTotal = (amount) => {
        let taxes = parseInt(calculateTaxes(cartTotalState));
        let grandTotal = taxes + cartTotalState;
        return parseInt(grandTotal).toFixed(2);
    }


    //! cartList component renders only if there are items in the cart/cartList
    if ((Object.keys(currentCartList).length < 1)) {
        content = (
            <Fragment>
                <Typography variant='h5' className={classes.emptyCartText}>
                    Your cart is empty!
                </Typography>
                {/* Return to products container */}
                <Box className={classes.productsButtonContainer}>
                    <Button component={Link} to="/productList"
                        className={classes.productsButton} label="home">
                        <Typography>
                            Go To Products
                        </Typography>
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
                    <Button component={Link}
                        to='/productList'
                        color='default'
                        className={classes.backToProductsButton2} >
                        <Typography>
                            Back To Products
                </Typography>
                    </Button>
                    <Button component={Link}
                        to='/reservations'
                        variant='contained'
                        color='primary'
                        fontSize='x-small'
                        className={classes.checkOutButton}>
                        Checkout
                    </Button>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </Box>
    );


    cartReceipt = (
        <Box style={{ margin: 30 }}>
            <Grid container>
                <Grid item xs={8}>
                    <Typography className={classes.cartTitle}>
                        Cart Total: $
                        </Typography>
                </Grid>
                <Grid item xs={4} className={classes.valueGridItem}>
                    <Typography>
                        {cartTotalState.toFixed(2)}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography className={classes.cartTitle}>
                        Taxes: $
                        </Typography>
                </Grid>
                <Grid item xs={4} className={classes.valueGridItem}>
                    <Typography>
                        {calculateTaxes(cartTotalState)}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography className={classes.grandTotalTitle}>
                        GrandTotal: $
                        </Typography>
                </Grid>
                <Grid item xs={4} className={classes.grandTotalGridItem}>
                    <Typography>
                        {calculateGrandTotal(cartTotalState)}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Margin left header container */}
                <Grid item></Grid>
                <Grid item xs={12}>
                    {/* //? Main header container */}
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer}>
                            <Typography variant="h3" className={classes.headerTitle}>
                                {/* Jareb likes these so add again at later date */}
                                {/* CHECKOUT */}
                            </Typography>
                            <Button
                                component={Link}
                                to="/reservations"
                                className={classes.bookOnlineButton}
                                variant="contained"
                                size="small"
                                color="primary"
                                endIcon={<PlayArrowIcon style={{ marginLeft: -8 }} />}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item></Grid>
                {/* Margin Left */}
                <Grid item xs={1} sm={1} md={2} lg={3}></Grid>
                {/* MAIN cartList CONTAINER */}
                <Grid item xs={10} sm={10} md={8} lg={6} className={classes.mainGridContent} >
                    <Paper className={classes.contentPaperContainer}>
                        {content}
                        {(!emptyCart) ? cartReceipt : null}
                        {(!emptyCart) ? buttonGroup : null}
                    </Paper>
                </Grid>
                {/* Margin Right */}
                <Grid item xs={1} sm={1} md={2} lg={3}></Grid>
            </Grid>
            <Grid item sm={1} md={2}></Grid>
            <Grid item xs={12} sm={10} md={8}>
            </Grid>
        </Box>
    )
}


CartView.propTypes = {

}


const mapStateToProps = state => {
    return {
        currentCartList: state.currentCartList.value,
        cartTotalState: state.currentCartList.cartTotalState,
    };
};


export default connect(
    mapStateToProps,
)(withRouter(CartView));



