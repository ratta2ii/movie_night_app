import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from './CartItemStyles';


const CartItem = (props) => {


    const { productId, handleRemoveWish } = props;
    const classes = useStyles();

    
    return (
        <Box className={classes.root}>
            {/* Main grid container */}
            <Grid container>
                {/* Image grid item */}
                <Grid item xs={3} sm={2}>
                    <Box>
                        <img src={props.mainImage} className={classes.productImg}
                            alt="movie screen or sound equipment product chosen by a user pic"/>
                        {/* This box is hidden until an xs viewport; at which point it renders */}
                        <Box className={classes.hiddenIconBox}>
                            <DeleteForeverIcon
                                className={classes.hiddenDeleteIcon}
                                onClick={() => { handleRemoveWish(productId); }} />
                        </Box>
                    </Box>
                </Grid>
                {/* Info main grid item */}
                <Grid item xs={9} sm={9}>
                    {/* Main info grid container */}
                    <Grid container>
                        {/* MAIN INFO item  (TOP ROW) */}
                        <Grid item xs={12} className={classes.topGridMain}>
                            {/* MAIN INFO container  (TOP ROW) */}
                            <Grid container>
                                {/* Product name container */}
                                <Grid item xs={12}>
                                    <Typography variant="inherit" className={classes.title}>
                                        Product:
                                    </Typography>
                                    <Typography variant="inherit" className={classes.productName}>
                                        {props.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* MAIN INFO item container (BOTTOM ROW) */}
                        <Grid item xs={12} className={classes.bottomGridMain}>
                            {/* MAIN INFO container  (BOTTOM ROW) */}
                            <Grid container>
                                {/* Price container */}
                                <Grid item xs={8}>
                                    <Typography variant="inherit" className={classes.title}>
                                        Price:
                                    </Typography>
                                    <Typography variant="inherit" className={classes.price}>
                                        $ {props.price}
                                    </Typography>
                                </Grid>
                                {/* Product ID container */}
                                <Grid item xs={4}>
                                    <Typography variant="inherit" className={classes.productId}>
                                        #{1000 + props.productId}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={1} className={classes.iconGridItem}>
                    <DeleteForeverIcon
                        className={classes.DeleteForeverIcon}
                        onClick={() => { handleRemoveWish(productId); }} />
                </Grid>
            </Grid>
        </Box>
    )
}


CartItem.propTypes = {

};

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CartItem));























// import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles';
// import useStyles from './WishStyles';
// import Button from '@material-ui/core/Button';


// const CartItem = props => {


//     //! Remove console statement !\\
//     // console.log("CartItem props: ", props);
//     const { productId, handleRemoveWish } = props;
//     const classes = useStyles();


//     return (
//         <Fragment>
//             <tr>
//                 <td className={classes.imageTableContainer}>
//                     <img src={props.mainImage} className={classes.mainImage} 
//                         alt="movie screen or sound equipment product chosen by a user pic" />
//                 </td>
//                 <td className={classes.tableText}>
//                     {props.title}
//                 </td>
//                 <td className={classes.buttonContainer}>
//                     <Button 
//                         style={{
//                             backgroundColor: '#bdbdbd',
//                             fontSize: 'x-small' 
//                         }}
//                         onClick={() => {
//                             handleRemoveWish(productId); }}>
//                             Remove
//                     </Button>
//                 </td>
//             </tr>
//         </Fragment>
//     )
// }


// CartItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     price: PropTypes.string,
//     mainImage: PropTypes.string,
// }


// export default withStyles(useStyles)(CartItem);




















// import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles';
// import useStyles from './WishStyles';
// import Button from '@material-ui/core/Button';


// const CartItem = props => {


//     //! Remove console statement !\\
//     // console.log("CartItem props: ", props);
//     const { productId, handleRemoveWish } = props;
//     const classes = useStyles();


//     return (
//         <Fragment>
//             <tr>
//                 <td className={classes.imageTableContainer}>
//                     <img src={props.mainImage} className={classes.mainImage} 
//                         alt="movie screen or sound equipment product chosen by a user pic" />
//                 </td>
//                 <td className={classes.tableText}>
//                     {props.title}
//                 </td>
//                 <td className={classes.buttonContainer}>
//                     <Button 
//                         style={{
//                             backgroundColor: '#bdbdbd',
//                             fontSize: 'x-small' 
//                         }}
//                         onClick={() => {
//                             handleRemoveWish(productId); }}>
//                             Remove
//                     </Button>
//                 </td>
//             </tr>
//         </Fragment>
//     )
// }


// CartItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     price: PropTypes.string,
//     mainImage: PropTypes.string,
// }


// export default withStyles(useStyles)(CartItem);



