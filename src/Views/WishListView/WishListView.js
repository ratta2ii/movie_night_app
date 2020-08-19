import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WishList from './../../Components/WishList/WishList';
import useStyles from './WishListViewStyles';
import { getCurrentWishList } from '../../Redux/Reducers/currentWishListReducer';


const WishListView = (props) => {


    const classes = useStyles();
    const currentWishList = useSelector(getCurrentWishList);
    let emptyCart = true;
    let checkoutButton;
    let content;


    //! WishList component that renders only if there stuff in the cart/wishlist
    if ((Object.keys(currentWishList).length >= 1)) {
        emptyCart = false;
        content = <WishList />;
    } else {
        content = (
            <Typography variant='h4'>
                Your cart is empty!
            </Typography>
        )
    };


    checkoutButton = (
        <Button component={Link} 
                to='/reservations' 
                variant='contained'
                color='primary'
                className={classes.checkOutButton}>
            <Typography>
                Go To Checkout
            </Typography>
        </Button>
    );


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Margin left header container */}
                <Grid item xs={0}></Grid>
                <Grid item xs={12}>
                    {/* //? Main header container */}
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer}>
                            <Typography variant="h3" className={classes.headerTitle}>
                                WISHLIST
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item xs={0}></Grid>
                {/* Margin Left */}
                <Grid item xs={1} sm={1} md={2} lg={3}></Grid>
                {/* MAIN WISHLIST CONTAINER */}
                <Grid item xs={10} sm={10} md={8} lg={6} className={classes.mainGridContent} >
                    <Paper className={classes.contentPaperContainer}>
                        {content}
                        {(!emptyCart) ? checkoutButton : null}
                    </Paper>
                </Grid>
                {/* Margin Right */}
                <Grid item xs={1} sm={1} md={2} lg={3}></Grid>
            </Grid>
            <Grid item xs={0} sm={1} md={2}></Grid>
            <Grid item xs={12} sm={10} md={8}>
            </Grid>
        </Box>
    )
}


WishListView.propTypes = {

}


export default WishListView;
