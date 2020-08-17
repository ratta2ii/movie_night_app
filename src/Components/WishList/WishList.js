import React from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './WishListStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// State management
import { removeWish, getCurrentWishList } from '../../Redux/Reducers/currentWishListReducer'
import Wish from '../Wish/Wish';


const WishList = props => {
    
    
    // const currentProduct = useSelector(getCurrentProduct);
    // const classes = useStyles();
    const currentWishList = useSelector(getCurrentWishList);
    const dispatch = useDispatch();
    let history = useHistory();
    console.log(currentWishList);
    
    
    const handleRemoveWish = (productId) => {
        console.log("handleRemoveWish (productId): ", productId);
        console.log("wishlist", currentWishList);
        
        dispatch(removeWish(productId));
        setTimeout(() => {
            history.push("/wishList");
        }, 1500);
    }
    
    
    return (
        <Box>
            <Grid container>
                {/* Left margin */}
                <Grid item xs={0} ></Grid>
                {/* Main Container */}
                <Grid item xs={12} >
                    <table class="redTable">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <td colspan="4">
                                </td>
                            </tr>
                        </tfoot>
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
                table.redTable {
                    border: 2px solid #59565a;
                    background-color: #FFFFFF;
                    width: 100%;
                    text-align: center;
                    border-collapse: collapse;
                }
                table.redTable td, table.redTable th {
                    border: 1px solid #59565a;
                    padding: 3px 2px;
                }
                table.redTable tbody td {
                    font-size: 16px;
                }
                table.redTable tr:nth-child(even) {
                    background: #F5C8BF;
                }
                table.redTable thead {
                    background: #20b8ff;
                }
                table.redTable thead th {
                    font-size: 19px;
                    font-family: 'Roboto';
                    font-weight: bold;
                    color: #FFFFFF;
                    text-align: center;
                    border-left: 2px solid #59565a;
                }
                table.redTable thead th:first-child {
                    border-left: none;
                }
                
                table.redTable tfoot {
                    font-size: 16px;
                    font-weight: bold;
                    color: #FFFFFF;
                    background: #59565a;
                }
                table.redTable tfoot td {
                    font-size: 16px;
                }
                table.redTable tfoot .links {
                    text-align: right;
                }
                `}</style>
        </Box>
    )
}


WishList.propTypes = {
    
}


export default withStyles(useStyles)(WishList);















// import PropTypes from 'prop-types'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';




// return (
    //     <Box>
//         <Grid container>
//             {/* Left margin */}
//             <Grid item xs={0} ></Grid>
//             {/* Main Container */}
//             <Grid item xs={12} >

//                 {Object.keys(currentWishList).map(function (productId) {
//                     var ele = currentWishList[productId];
//                     return <Wish
//                         title={ele.title}
//                         productId={ele.productId}
//                         mainImage={ele.mainImage}
//                         price={ele.price}
//                         id={ele.id}
//                         description={ele.description}
//                         bullets={ele.bullets}
//                         handleRemoveWish={handleRemoveWish}
//                     />;
//                 })}


//             </Grid>
//         </Grid>
//     </Box>
// )


