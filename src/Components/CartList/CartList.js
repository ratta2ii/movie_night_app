import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// Custom component, state, and styles
import CartItem from '../CartItem/CartItem';
import useStyles from './CartListStyles';
import { removeWish, getCurrentCartList } from '../../Redux/Reducers/currentCartListReducer';


const CartList = props => {
    

    const currentCartList = useSelector(getCurrentCartList);
    const dispatch = useDispatch();
    const classes = useStyles();

    
    const handleRemoveWish = (productId) => {
        dispatch(removeWish(productId));
    }

    
    return (
        <Box>
            <Grid container>
                {/* Left margin */}
                <Grid item></Grid>
                {/* Main Container */}
                <Grid item xs={12} >
                    <Box className={classes.table}>
                        <Box>
                            {Object.keys(currentCartList).map(function (productId) {
                                var ele = currentCartList[productId];
                                return <CartItem
                                key={ele.id}
                                title={ele.title}
                                productId={ele.productId}
                                mainImage={ele.mainImage}
                                price={ele.price}
                                id={ele.id}
                                description={ele.description}
                                bullets={ele.bullets}
                                handleRemoveWish={handleRemoveWish}
                                />;
                            })}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


CartList.propTypes = {
    
}


const mapStateToProps = state => {
    return {
        currentCartList: state.currentCartList.value,
    };
};


export default connect(mapStateToProps)(withRouter(CartList));






