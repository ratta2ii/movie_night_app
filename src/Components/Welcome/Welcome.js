import React from 'react';
import { Link } from "react-router-dom";
import propTypes from 'prop-types';
// import { Route, withRouter } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import useStyles from './WelcomeStyles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import giantScreenImage from './../../Assets/Images/giant-screen.jpg'
import BookOnlineButton from './../../Assets/Images/book-online-button.png';


const Welcome = (props) => {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Margin left main container */}
                <Grid item xs={0} sm={1} md={1} xl={2}></Grid>
                <Grid item xs={12} sm={10} md={10} xl={8}>
                    {/* //? Main container (All content here) */}
                    <Paper className={classes.paper}>
                        <Grid container className={classes.mainGridContainer}>

                            {/* Left container */}
                            <Grid item xs={12} lg={6} className={classes.leftGridContainer}>
                                <Box>
                                    <Typography variant='h2' className={classes.title}>
                                        AZ Movie Nights
                                    </Typography>
                                    <Typography className={classes.companyDescription}>
                                        AZ Event Team is a family-owned business that takes great   pride in making sure we deliver safe, high-quality rentals and event equipment.
                                    </Typography>
                                    <Typography className={classes.companyDescription}>
                                        We are here to help you plan your next event, whether that be a small backyard party, or a much larger city or corporate event. We are an upscale rental company offering
                                            exceptional service at an affordable price.
                                    </Typography>
                                    <Typography className={classes.companyDescription}>
                                        Please check out some photos <Link to="/images">HERE</Link> to see some of the different events that we have partnered with in the past.
                                    </Typography>
                                    {/* 
                                    <Link to="/reservations">
                                        <img src={BookOnlineButton} className={classes.bookOnlineButton}
                                            alt='movie screen and sound equipment rental company book now options link button' />
                                    </Link> 
                                    */}
                                </Box>
                            </Grid>


                            {/* Right container */}
                            <Grid item xs={12} lg={6} className={classes.rightGridContainer}>
                                <img src={giantScreenImage} className={classes.movieNightImage} alt='A family watching a movie together on an outdoor movie screen and sound equipment rentals.' />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}


Welcome.propTypes = {

}


export default withStyles(useStyles)(Welcome);