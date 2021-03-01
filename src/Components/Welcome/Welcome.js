import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core/";
import { Typography } from "@material-ui/core";
import giantScreenImage from "./../../Assets/Images/giant-screen.jpg";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./WelcomeStyles";

const Welcome = (props) => {
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
                                <Box>
                                    <Typography variant="h2" className={classes.title}>
                                        Movie Nights
                                    </Typography>
                                    <Typography className={classes.companyDescription}>
                                        AZ Movie Nights is a family-owned business that takes pride
                                        in making sure we deliver safe, high-quality rentals and
                                        event equipment.
                                    </Typography>
                                    <Typography className={classes.companyDescription}>
                                        We are here to help you plan your next event, whether that
                                        be a small backyard party, or a much larger city or
                                        corporate event. We are an upscale rental company offering
                                        exceptional service at an affordable price.
                                    </Typography>
                                    <Typography className={classes.companyDescription}>
                                        Please click{" "}
                                        <Link
                                            to="/images"
                                            style={{ textDecoration: "none", color: "#e57373" }}
                                        >
                                            HERE
                                        </Link>{" "}
                                        to check out some of some of the different events that we have partnered with in the past.
                                    </Typography>
                                    <Typography className={classes.companyDescription}>
                                        We love what we do, and we look forward to partnering with
                                        you in your next movie night event.
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* Right container */}
                            <Grid item xs={12} md={6} className={classes.rightGridContainer}>
                                <img
                                    src={giantScreenImage}
                                    className={classes.movieNightImage}
                                    alt="A family watching a movie together on an outdoor movie screen and sound equipment rentals."
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

Welcome.propTypes = {};

export default withStyles(useStyles)(Welcome);
