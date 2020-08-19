import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import useStyles from './WishStyles';
import Button from '@material-ui/core/Button';


const Wish = props => {


    //! Remove console statement !\\
    // console.log("Wish props: ", props);
    const { productId, handleRemoveWish } = props;
    const classes = useStyles();


    return (
        <Fragment>
            <tr>
                <td className={classes.imageTableContainer}>
                    <img src={props.mainImage} className={classes.mainImage} 
                        alt="movie screen or sound equipment product chosen by a user pic" />
                </td>
                <td className={classes.tableText}>
                    {props.title}
                </td>
                <td className={classes.buttonContainer}>
                    <Button 
                        style={{
                            backgroundColor: '#bdbdbd',
                            fontSize: 'x-small' 
                        }}
                        onClick={() => {
                            handleRemoveWish(productId); }}>
                            Remove
                    </Button>
                </td>
            </tr>
        </Fragment>
    )
}


Wish.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    mainImage: PropTypes.string,
}


export default withStyles(useStyles)(Wish);



