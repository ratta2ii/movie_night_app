import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import familyMovieNight from './../../Assets/Images/family-movie-night.jpg'
import useStyles from './AboutUsStyles';


const AboutUs = (props) => {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Margin left main container */}
                <Grid item xs={1} xl={2}></Grid>
                <Grid item xs={10} xl={8}>
                    {/* //? Main container (All content here) */}
                    <Paper className={classes.paper}>
                        <Grid container className={classes.mainGridContainer}>
                            {/* Left container */}
                            <Grid item xs={12} md={6} className={classes.leftGridContainer}>
                                <img src={familyMovieNight} className={classes.movieNightImage} alt='A family watching a movie together on an outdoor movie screen and sound equipment rentals.' />
                            </Grid>
                            {/* Right container */}
                            <Grid item xs={12} md={6} className={classes.rightGridContainer}>
                                <Box>
                                    <Typography variant='h2' className={classes.title}>
                                        How it works
                                    </Typography>
                                    <Typography className={classes.companyDescription}>Entertain guests at your next outdoor party with a movie, video games, or a presentation that will surely impress. Our huge outdoor inflatable movie screens will be the "WOW" factor at any event! 
                                    </Typography>
                                    <Typography className={classes.companyDescription}>You can make can reserve our products <Link to="/productList" style={{textDecoration: 'none', color: '#e57373'}}>HERE</Link> online, or give us a call anytime at (602) 339-9530.
                                    </Typography>
                                    <Typography className={classes.companyDescription}>Our package prices also include a full-time staff member that will be responsible for running the equipment throughout the course of the event. Pricing also includes setting the equipment up, taking the equipment down, and any necessary clean-up.  
                                    </Typography>
                                    <Typography className={classes.companyDescription}>Choose your event equipment today, and any extras you may want, and then leave the rest up to us. Thank you for visiting the site today, and we look forward to partnering with you in your next movie night event. 
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}


AboutUs.propTypes = {

}


export default withStyles(useStyles)(AboutUs);
