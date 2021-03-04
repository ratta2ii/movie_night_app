
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './ProductStyles';
import { selectProduct } from '../../Redux/Reducers/currentProductReducer';
import { addWish } from '../../Redux/Reducers/currentCartListReducer'

const Product = (props) => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    function handleOpenProduct(product) {
        dispatch(selectProduct(product));
        history.push(`/product/${product.productId}`);
    }

    const handleAddTocartList = (card) => {
        dispatch(addWish(card));
        history.push("/cartList");
    }

    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <Card className={styles.root}>
                <CardActionArea
                    className={styles.CardActionArea}
                    style={{ outline: "none", }}
                    onClick={() => { handleOpenProduct(props) }}
                >
                    <CardMedia
                        className={styles.CardMedia}
                        image={props.mainImage}
                        title={props.title}
                    />
                    <CardContent
                        style={{
                            backgroundColor: '#edf0f8',
                            padding: 8
                        }}>
                        <Typography
                            className={styles.title}
                            variant="h6"
                            component="h2"
                        >
                            {props.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* Buttons on Card */}
                <CardActions className={styles.action} >
                    <AddShoppingCartIcon 
                        onClick={() => { handleAddTocartList(props) }}
                        style={{cursor: 'pointer'}}
                        fontSize="small" />
                    <Typography
                        onClick={() => { handleAddTocartList(props) }}
                        className={styles.addWishText}
                        style={{cursor: 'pointer'}}
                        variant="body2"
                    >
                        ADD TO CART
                    </Typography>
                    <Button size="small"
                        color="primary"
                        onClick={() => { handleOpenProduct(props) }}
                        style={{ margin: 'auto', fontSize: '.8rem' }}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default withStyles(useStyles)(Product);