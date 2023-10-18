import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Welcome from "../../Components/Welcome/Welcome";
import AboutUs from "./../../Components/AboutUs/AboutUs";
import Footer from "./../../Components/Footer/Footer";
import useStyles from "./HomeStyles";
import "./styles.css";
import Categories from "../../Components/Categories/Categories";


function Home(props) {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleScrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.innerRoot} >
                <Welcome />
                <AboutUs />
                {/* Product Header */}
                <Grid container>
                    {/* Margin left main container */}
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        {/* //? Main container (All content here) */}
                        <Box className={classes.headerContainer}>
                            <Button
                                component={Link}
                                to="/reservations"
                                className={classes.contactUsButton}
                                variant="contained"
                                color="primary"
                                size="small"
                                endIcon={<PlayArrowIcon style={{ marginLeft: -8 }} />}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Grid>
                    {/* Header right margin */}
                    <Grid item xs={1} xl={1}></Grid>
                    {/* Products Left Margin */}
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Box className={classes.CategoriesContainer}>
                            <Categories />
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Box>
            <Button onClick={handleScrollTop} className={classes.scrollTopButton} >TOP</Button>
            <Footer />
        </Box>
    );
}

export default Home;