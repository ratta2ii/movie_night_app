import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import familyMovieNight from "./../../Assets/Images/family-movie-night.jpg";
import useStyles from "./AboutUsStyles";

const AboutUs = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Margin left main container */}
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    {/* //? Main container (All content here) */}
                    <Paper className={classes.paper}>
                        <Grid container className={classes.mainGridContainer}>
                            {/* Left container */}
                            <Grid item xs={12} md={6} className={classes.leftGridContainer}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={familyMovieNight}
                                >
                                    <img
                                        src={familyMovieNight}
                                        className={classes.movieNightImage}
                                        alt="A family watching a movie together on an outdoor movie screen and sound equipment rentals."
                                    />
                                </a>
                            </Grid>
                            {/* Right container */}
                            <Grid item xs={12} md={6} className={classes.rightGridContainer}>
                                <Box>
                                    <Typography variant="h2" className={classes.title}>
                                        How it works
                                    </Typography>
                                    <Typography className={classes.companyDescription}>
                                        Entertain guests at your next outdoor party with a movie,
                                        video games, or a presentation that will surely impress. Our
                                        huge outdoor inflatable movie screens will be the "WOW"
                                        factor at any event!
                                    </Typography>
                                    <Typography
                                        className={classes.companyDescription}
                                    ></Typography>
                                    <Typography className={classes.companyDescription}>
                                        Pricing also includes free delivery (to most
                                        areas), free equipment set up, and of course, taking things
                                        down and cleaning up after the event. Our package prices also include a staff member to run all of the equipment.
                                    </Typography>
                                    <Typography className={classes.companyDescription}>
                                        Choose your event equipment today. View our {" "}
                                        <Link
                                            to="/products"
                                            style={{ textDecoration: "none", color: "#e57373" }}
                                        >
                                            Products
                                        </Link>
                                            {" "} online and make reservations now, or give us a call anytime. Just  make your reservations and leave the rest to us. (555)555-5555
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* Margin right main container */}
                <Grid item xs={1}></Grid>
            </Grid>
        </Box>
    );
};

AboutUs.propTypes = {};

export default withStyles(useStyles)(AboutUs);
