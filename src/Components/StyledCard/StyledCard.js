import React from "react";
import { useHistory } from "react-router-dom";
// Material ui
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EmailIcon from '@material-ui/icons/Email';
import ShareIcon from '@material-ui/icons/Share';
import useStyles from "./StyledCardStyles";
// State management
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentProduct } from '../../Redux/Reducers/currentProductReducer';
import { addWish } from '../../Redux/Reducers/currentWishListReducer'


const StyledCard = (props) => {


    let history = useHistory();
    const currentProduct = useSelector(getCurrentProduct);
    const classes = useStyles();
    const dispatch = useDispatch();


    //! Remove console statements !\\
    // console.log("Styled Card props: ", props);


    const handleAddToWishList = () => {
        dispatch(addWish(currentProduct));
        //? Possiblee time delay here
        // setTimeout(() => {
        //     history.push("/wishList");
        // }, 500);
        history.push("/wishList");
    }


    const handleReserveNow = () => {
        dispatch(addWish(currentProduct));
        history.push("/reservations");
    }


    const handleBack = () => {
        history.push("/productList");
    }


    return (
        <Box className={classes.root}>
            <Grid container className={classes.mainGridContainer} alignContent="center" justify="center">
                {/* Header */}
                <Grid item xs={12} className={classes.topGridItem} >
                    <ArrowBackIosIcon onClick={handleBack} />
                    <span
                        className={classes.backToProducts}
                        onClick={handleBack}>
                        BACK TO PRODUCTS
                    </span>
                    <ShareIcon
                        className={classes.FavoriteBorderIcon}
                        style={{
                            position: 'absolute',
                            right: '35',
                            color: '#7e7b7b'
                        }}
                    />
                </Grid>
                {/* Image Container */}
                <Grid item xs={12} md={6} className={classes.imageGridContainer} style={{ backgroundColor: 'white' }}>
                    <img className={classes.imageStyles} src={currentProduct.mainImage} alt="current outdoor movie screen rental equipment product" />
                </Grid>
                {/* Main Content */}
                <Grid item xs={12} md={6} style={{ backgroundColor: 'white' }}>
                    <Box className={classes.descriptionContainer}>
                        <Typography className={classes.title}>
                            {currentProduct.title}
                        </Typography>
                        <Typography className={classes.subTitle}>MOST POPULAR ITEM</Typography>
                        <Typography variant="h2" className={classes.price}>$ {currentProduct.price}</Typography>
                        <CardContent className={classes.description}>
                            Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.
                        </CardContent>
                        <ul>
                            {currentProduct.bullets.map(bullet => {
                                return <li>{bullet}</li>
                            })}
                        </ul>
                    </Box>
                </Grid>
                {/* Button view */}
                <Grid item xs={12}>
                    <Grid container alignItems="center" className={classes.buttonView}>
                        <Grid item xs={0} sm={2} md={6}></Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Button
                                className={classes.wishButton}
                                onClick={handleAddToWishList}
                                variant="contained"
                                color="default"
                                size="small"
                                startIcon={<AddShoppingCartIcon />}
                            >
                                Add To Cart
                            </Button>
                            <Button
                                className={classes.reserveButton}
                                onClick={handleReserveNow}
                                variant="contained"
                                color="default"
                                size="small"
                                startIcon={<EmailIcon />}
                            >
                                Contact Us
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}


export default StyledCard;