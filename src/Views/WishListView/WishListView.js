import React from 'react'
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './WishListViewStyles';
import WishList from './../../Components/WishList/WishList';
// import PropTypes from 'prop-types';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';


const WishListView = (props) => {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Margin left header container */}
                <Grid item xs={0}></Grid>
                <Grid item xs={12}>
                    {/* //? Main header container */}
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer}>
                            <Typography variant="h3" className={classes.headerTitle}>
                                WISHLIST
                            </Typography>
                            <Link to="/reservations">
                                
                            </Link>

                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item xs={0}></Grid>
                {/* Margin Left */}
                <Grid item xs={0} sm={1} md={2}></Grid>
                {/* MAIN WISHLIST CONTAINER */}
                <Grid item xs={12} sm={10} md={8} >
                    <Paper className={classes.contentPaperContainer}>
                        <WishList />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}


WishListView.propTypes = {

}


export default WishListView;
