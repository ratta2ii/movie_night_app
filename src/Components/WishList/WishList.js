import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// Custom component, state, and styles
import Wish from '../Wish/Wish';
import useStyles from './WishListStyles';
import { removeWish, getCurrentWishList } from '../../Redux/Reducers/currentWishListReducer';


const WishList = props => {
    
    
    const currentWishList = useSelector(getCurrentWishList);
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
                    <table className={classes.table}>
                        <tbody>
                            {Object.keys(currentWishList).map(function (productId) {
                                var ele = currentWishList[productId];
                                return <Wish
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






