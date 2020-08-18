
import React from 'react'
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
// Custom components and styles
import Welcome from '../../Components/Welcome/Welcome';
import AboutUs from './../../Components/AboutUs/AboutUs';
import ProductList from './../../Components/ProductList/ProductList';
import Footer from './../../Components/Footer/Footer';
import useStyles from './HomeStyles';


function Home(props) {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Paper className={classes.mainTitlePaper}>
                <Typography variant='h1' className={classes.mainTitle}>
                    OUTDOOR MOVIE NIGHT EVENTS...
                </Typography>
            </Paper>
            <Welcome />
            <AboutUs />
            {/* Product Header */}
            <Grid container>
                {/* Margin left main container */}
                <Grid item xs={1} xl={2}></Grid>
                <Grid item xs={10} xl={8}>
                    {/* //? Main container (All content here) */}
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer}>
                            <Typography variant="h3" className={classes.productHeaderTitle}>
                                PRODUCTS
                            </Typography>
                            <Button
                                component={Link}
                                to="/reservations"
                                className={classes.bookOnlineButton}
                                variant="contained"
                                // color="default"
                                size="small"
                                endIcon={<PlayArrowIcon style={{ marginLeft: -8 }} />}
                            >
                                Book Online
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item xs={0} sm={1} md={1} xl={2}></Grid>
            </Grid>
            <ProductList />
            <Footer />
        </Box>
    )
}


export default Home;




