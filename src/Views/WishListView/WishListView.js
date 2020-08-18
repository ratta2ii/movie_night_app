import React from 'react'
//import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WishList from './../../Components/WishList/WishList';
import useStyles from './WishListViewStyles';


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
                        <Box className={classes.contentOverlayContainer}>
                            <WishList />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}


WishListView.propTypes = {

}


export default WishListView;
