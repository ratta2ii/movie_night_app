
import React from 'react';
import { useDispatch } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './ProductStyles';
// State management
import { selectProduct } from '../../Redux/Reducers/currentProductReducer';




function Product(props) {
    // console.log("Product props: ", props);


    const styles = useStyles();
    const dispatch = useDispatch();


    function handleModal(product) {
        // console.log("Product component: handleModal args: ", product);
        //*  Set Product *// 
        dispatch(selectProduct(product));
        //* Open modal *//
        props.handleOpen();
    }


    return (
        <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Card className={styles.root} onClick={() => { handleModal(props) }}>


                <CardActionArea
                    className={styles.CardActionArea}
                    style={{ outline: "none" }}
                >
                    <CardMedia
                        className={styles.CardMedia}
                        image={props.mainImage}
                        title={props.title}
                    />
                    <CardContent className={styles.CardContent}>
                        <Typography
                            className={styles.title}
                            // gutterBottom 
                            variant="h6"
                            component="h2"
                        >
                            {props.title}
                        </Typography>
                        {/* <Typography 
                            variant="body2" 
                            color="textSecondary" 
                            component="p" 
                        >
                            {props.description}
                        </Typography> */}
                    </CardContent>
                </CardActionArea>

                {/* Buttons on Card */}
                <CardActions className={styles.action}>
                    <AddCircleIcon fontSize="small" />
                    <Typography
                        className={styles.addWishText}
                        variant="body2"
                    >
                        ADD TO WISHLIST
                    </Typography>
                    <Button size="small" color="primary" style={{ margin: 'auto' }} >
                        {/* <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={props.mainImage}
                        >
                            Learn More
                        </a> */}
                        Learn More
                    </Button>
                </CardActions>


            </Card>
        </Grid>
    )
}


export default withStyles(useStyles)(Product);