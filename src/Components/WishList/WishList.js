import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// Custom component, state, and styles
import Wish from '../Wish/Wish';
import useStyles from './WishListStyles';
import { removeWish, getCurrentWishList } from '../../Redux/Reducers/currentWishListReducer';


const WishList = props => {
    
    
    const currentWishList = useSelector(getCurrentWishList);
    let history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    console.log(currentWishList);
    
    
    const handleRemoveWish = (productId) => {
        dispatch(removeWish(productId));
        //? Possible time delay
        // setTimeout(() => {
        //     history.push("/wishList");
        // }, 1500);
        history.push("/wishList");
    }
    
    
    return (
        <Box>
            <Grid container>
                {/* Left margin */}
                <Grid item xs={0} ></Grid>
                {/* Main Container */}
                <Grid item xs={12} >
                    <table className={classes.table}>
                        <tbody>
                            {Object.keys(currentWishList).map(function (productId) {
                                var ele = currentWishList[productId];
                                return <Wish
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
                        </tbody>
                    </table>
                </Grid>
            </Grid>
            <style jsx="true">{`
                tr:nth-child(even) {
                    background-color: #e3f2fd;
                }
            `}</style>
        </Box>
    )
}


WishList.propTypes = {
    
}


export default withStyles(useStyles)(WishList);






