import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import useStyles from './WishStyles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// State management
import { selectProduct, getCurrentProduct } from '../../Redux/Reducers/currentProductReducer';
import { removeWish, getCurrentWishList } from '../../Redux/Reducers/currentWishListReducer'




const Wish = props => {

    const { productId, handleRemoveWish } = props;
    const classes = useStyles();


    //! Remove console statement !\\
    // console.log("Wish props: ", props);




    return (
        <Fragment>



                    <tr>
                        <td className={classes.imageTableContainer}>
                            <img src={props.mainImage} className={classes.mainImage} alt="movie screen or sound equipment product chosen by a user pic" />
                        </td>
                        <td className={classes.tableText}>{props.title}</td>
                        {/* <td className={classes.tableText}>{props.id}</td> */}
                        <td>
                            <Button style={{backgroundColor: '#FF7043', fontSize: 'x-small'}} onClick={() => {
                                handleRemoveWish(productId);
                            }}>Remove</Button>
                        </td>
                    </tr>


    
            <style jsx="true">{`
                td {
                    // border: 1px solid #AAAAAA;
                    border: 1px solid blue;
                    padding: 15px;
                    font-size: 23px;
                }
                tr:nth-child(even) {
                    background: #F5C8BF;
                }
            `}</style>
        </Fragment>
    )
}


Wish.propTypes = {
    productId: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    mainImage: PropTypes.string,
}


export default withStyles(useStyles)(Wish);





// {/* <Grid container>
// {/* Left margin */}
// <Grid item xs={0}></Grid>
// {/* Main container */}
// <Grid item xs={12} > */}



// return (
//     <Box className={classes.root}>
//         <Grid container>
//             {/* Left margin */}
//             <Grid item xs={0}></Grid>
//             {/* Main container */}
//             <Grid item xs={4} >
//                 <Box>
//                     <ul>
//                         <li>{props.productId}</li>
//                     </ul>
//                     <img src={props.mainImage} className={classes.mainImage} alt="product Image" />
//                 </Box>
//                 <Button onClick={() => {
//                     handleRemoveWish(productId);
//                 }}>Remove</Button>
//             </Grid>

//             <Grid item xs={4} >
//                 <Typography variant="h3">
//                     {props.title}
//                 </Typography>
//             </Grid>
//             <Grid item xs={2} >
//                 Price: {props.price}
//             </Grid>
//             <Grid item xs={2} >
//                 {props.price}
//             </Grid>


//         </Grid>
//     </Box>
// )
// }