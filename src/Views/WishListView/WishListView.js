import React from 'react'
import PropTypes from 'prop-types';
import useStyles from './WishListViewStyles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WishList from './../../Components/WishList/WishList';



const WishListView = (props) => {
    return (
        <Box>
            <WishList />
        </Box>
    )
}


WishListView.propTypes = {

}


export default WishListView;
