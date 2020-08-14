import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import useStyles from './WishStyles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// State management
import { selectProduct, getCurrentProduct } from '../../Redux/Reducers/currentProductReducer';
import { removeWish, getCurrentWishList } from '../../Redux/Reducers/currentWishListReducer'



const Wish = props => {

    const { productId, handleRemoveWish } = props;
    const classes = useStyles();


    //! Remove console statement !\\
    console.log("Wish props: ", props);


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Left margin */}
                <Grid item xs={0} ></Grid>
                {/* Main container */}
                <Grid item xs={12} >
                    <Box>
                        <ul>
                            <li>{props.productId}</li>
                            <li>{props.title}</li>
                            <li>{props.price}</li>
                        </ul>
                        <img src={props.mainImage} alt="product Image" />
                    </Box>
                    <Button onClick={() => {
                        handleRemoveWish(productId);
                    }}>Remove</Button>
                </Grid>
            </Grid>
        </Box>
    )
}


Wish.propTypes = {
    productId: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    mainImage: PropTypes.string,
}


export default withStyles(useStyles)(Wish);