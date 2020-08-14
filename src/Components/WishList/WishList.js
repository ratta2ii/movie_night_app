import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import useStyles from './WishListStyles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// State management
import { removeWish, getCurrentWishList } from '../../Redux/Reducers/currentWishListReducer'
import Wish from '../Wish/Wish';


const WishList = props => {


    // const currentProduct = useSelector(getCurrentProduct);
    const currentWishList = useSelector(getCurrentWishList);
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleRemoveWish = (productId) => {
        console.log("handleRemoveWish (productId): ", productId);
        dispatch(removeWish(productId));
    }


    return (
        <Box>
            <Grid container>
                {/* Left margin */}
                <Grid item xs={0} ></Grid>
                {/* Main Container */}
                <Grid item xs={12} >
                {currentWishList.map((ele) =>
                            <Wish
                                title={ele.title}
                                productId={ele.productId}
                                mainImage={ele.mainImage}
                                price={ele.price}
                                id={ele.id}
                                description={ele.description}
                                bullets={ele.bullets} 
                                handleRemoveWish={handleRemoveWish} 
                            />
                        )}
                </Grid>
            </Grid>
        </Box>
    )
}


WishList.propTypes = {

}


export default withStyles(useStyles)(WishList);


