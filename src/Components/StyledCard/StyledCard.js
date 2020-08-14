import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
// Styling
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./StyledCardStyles";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// State management
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentProduct } from '../../Redux/Reducers/currentProductReducer';
import { addWish } from '../../Redux/Reducers/currentWishListReducer'


const StyledCard = (props) => {


    let history = useHistory();
    const { handleClose } = props;
    const currentProduct = useSelector(getCurrentProduct);
    const classes = useStyles();
    const dispatch = useDispatch();


    //! Remove console statements !\\
    // console.log("Styled Card props: ", props);


    const handleAddToWishList = () => {
        console.log("Made it in wishList");
        console.log("Wish to add: ", currentProduct);
        dispatch(addWish(currentProduct));
        setTimeout(() => {
            handleClose();
            history.push("/wishList");
        }, 500);

    }


    return (
        <Box className={classes.paper}>
            <Grid container className={classes.root} alignContent="center">
                {/* Header */}
                <Grid item xs={12} style={{
                    backgroundColor: 'white',
                    padding: '20px 30px',
                    borderBottom: '2px solid #efefef',
                    color: '#727272',
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                }} >
                    <ArrowBackIosIcon onClick={handleClose} />
                    <span onClick={handleClose}>BACK TO PRODUCTS</span>
                    {/* <FavoriteBorderIcon style={{ float: 'right', color: '#c56767' }} /> */}
                </Grid>

                <Grid item xs={12} md={6} className={classes.imageGridContainer} style={{ backgroundColor: 'white' }}>
                    <img className={classes.imageStyles} src={currentProduct.mainImage} alt="current outdoor movie screen rental equipment product" />
                </Grid>


                {/* Main Content */}
                <Grid item xs={12} md={6} style={{ backgroundColor: 'white' }}>
                    <Box className={classes.descriptionContainer}>
                        <h4 className={classes.title}>{currentProduct.title}</h4>
                        {/* <Typography variant="h4" style={{ fontFamily: 'Raleway, sans-serif'}}>{current_product.title}</Typography> */}
                        <Typography className={classes.subTitle}>MOST POPULAR ITEM</Typography>
                        <Typography variant="h2">$395</Typography>
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


                {/* Button View */}
                <Grid item xs={12}>
                    <Grid container alignItems="center" style={{
                        height: 85,
                        backgroundColor: 'cornflowerblue',
                        borderTop: '2px solid #efefef',
                        display: 'flex',
                        justifyItems: 'center'
                    }}>
                        <Grid item xs={0} md={6}></Grid>
                        <Grid item xs={0} md={6}>
                            <Button className={classes.wishButton}
                                variant="outlined"
                                color="primary"
                                onClick={handleAddToWishList} >
                                Add to Wishlist
                            </Button>
                            <Button className={classes.reserveButton}
                                variant="outlined"
                                color="primary" >
                                Reserve Now
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Box>
    );
}


export default withStyles(useStyles)(StyledCard);