import React from "react";
import { useHistory } from "react-router-dom";
// Material ui
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Icons
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EmailIcon from "@material-ui/icons/Email";
import ShareIcon from "@material-ui/icons/Share";
import useStyles from "./StyledCardStyles";
import { useDispatch } from "react-redux";
import { addWish } from "../../Redux/Reducers/currentCartListReducer";
import { masterProductList } from "./../../Data/MockData/DataProducts";

// This will ensure a single product stays loaded even through refresh
let masterProductListLoadingRegistry = {};
masterProductList.forEach((product) => {
    masterProductListLoadingRegistry[product.productId] = product;
});

const StyledCard = (props) => {
    const classes = useStyles();
    let history = useHistory();
    const dispatch = useDispatch();
    const currentProductId = history.location.pathname.split("product/")[1];
    let currentProduct = masterProductListLoadingRegistry[currentProductId];

    const handleAddTocartList = () => {
        dispatch(addWish(currentProduct));
        history.push("/cartList");
    };

    const handleReserveNow = () => {
        dispatch(addWish(currentProduct));
        history.push("/reservations");
    };

    const handleBack = () => {
        history.push("/productList");
    };

    return (
        <Box className={classes.root}>
            <Grid
                container
                className={classes.mainGridContainer}
                alignContent="center"
                justify="center"
            >
                {/* Header */}
                <Grid item xs={12} className={classes.topGridItem}>
                    <ArrowBackIosIcon onClick={handleBack} />
                    <span className={classes.backToProducts} onClick={handleBack}>
                        BACK TO PRODUCTS
                    </span>
                    <ShareIcon
                        className={classes.FavoriteBorderIcon}
                        style={{
                            position: "absolute",
                            right: "35",
                            color: "#7e7b7b",
                        }}
                    />
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
                            <Button
                                className={classes.wishButton}
                                onClick={handleAddTocartList}
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<AddShoppingCartIcon />}
                            >
                                Add To Cart
                            </Button>
                            <Button
                                className={classes.reserveButton}
                                onClick={handleReserveNow}
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<EmailIcon />}
                            >
                                Contact Us
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StyledCard;
