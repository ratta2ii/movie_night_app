import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EmailIcon from "@material-ui/icons/Email";
import ButtonLoading from './../../Components/ButtonLoading/ButtonLoading';
import useStyles from "./StyledCardStyles";
import { useDispatch } from "react-redux";
import { addWish } from "../../Redux/Reducers/currentCartListReducer";
import { masterProductList } from "./../../Data/MockData/DataProducts";
// import ShareIcon from "@material-ui/icons/Share";

//! This will ensure a single product stays loaded even through refresh (refactor coming?)
let masterProductListLoadingRegistry = {};
masterProductList.forEach((product) => {
    masterProductListLoadingRegistry[product.productId] = product;
});

const StyledCard = (props) => {
    const classes = useStyles();
    let history = useHistory();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const currentProductId = history.location.pathname.split("product/")[1];
    let currentProduct = masterProductListLoadingRegistry[currentProductId];

    // loading indicator timer
    const sleep = (delay) => {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        })
    }

    const handleAddTocartList = async () => {
        setLoading(true);
        await sleep(800);
        dispatch(addWish(currentProduct));
        history.push("/cartList");
        setLoading(false);
    };

    const handleContactUs = async () => {
        setLoading(true);
        await sleep(800);
        history.push("/reservations");
        setLoading(false);
    };

    const handleBack = () => {
        history.push("/products");
    };

    return (
        <Box className={classes.root} >
            <Grid
                container
                className={classes.mainGridContainer}
                alignContent="center"
                justify="center"
            >
                {/* Header */}
                <Grid item xs={12} className={classes.topGridItem}>
                    <ArrowBackIosIcon onClick={handleBack}  style={{cursor: 'pointer'}} />
                    <span className={classes.backToProducts} onClick={handleBack}>
                        BACK TO PRODUCTS
                    </span>
                    {/* <ShareIcon
                        className={classes.FavoriteBorderIcon}
                        style={{
                            position: "absolute",
                            right: "35",
                            color: "#7e7b7b",
                        }}
                    /> */}
                </Grid>
                {/* Image Container */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    className={classes.imageGridContainer}
                    style={{ backgroundColor: "white" }}
                >
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={currentProduct.mainImage}
                    >
                        <img
                            className={classes.imageStyles}
                            src={currentProduct.mainImage}
                            alt="current outdoor movie screen rental equipment product"
                        // Learn More
                        />
                    </a>
                </Grid>
                {/* Main Content */}
                <Grid item xs={12} md={6} style={{ backgroundColor: "white" }}>
                    <Box className={classes.descriptionContainer}>
                        <Typography className={classes.title}>
                            {currentProduct.title}
                        </Typography>
                        <Typography className={classes.subTitle}>
                            {currentProduct.subTitle}
                        </Typography>
                        <Typography variant="h2" className={classes.price}>
                            $ {currentProduct.price}
                        </Typography>
                        <CardContent className={classes.description}>
                            {currentProduct.description}
                        </CardContent>
                        <ul>
                            {currentProduct.bullets.map((bullet) => {
                                return <li key={bullet}>{bullet}</li>;
                            })}
                        </ul>
                    </Box>
                </Grid>
                {/* Button view */}
                <Grid item xs={12}>
                    <Grid container alignItems="center" className={classes.buttonView}>
                        <Grid item sm={2} md={6}></Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Box className={classes.buttonGroup}>
                                {/* //! NOTE: these are custom properties being passed down  */}
                                <ButtonLoading
                                    customClassName={classes.wishButton}
                                    eventName={handleAddTocartList}
                                    disabled={loading}
                                    name="Add To Cart"
                                    startIcon={<AddShoppingCartIcon />}
                                />
                                <ButtonLoading
                                    customClassName={classes.reserveButton}
                                    eventName={handleContactUs}
                                    disabled={loading}
                                    name="Contact Us"
                                    startIcon={<EmailIcon />}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StyledCard;
