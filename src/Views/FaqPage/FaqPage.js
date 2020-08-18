import React from 'react'
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
// Custom components and styles
import Faqs from './../../Components/Faqs/Faqs';
import useStyles from './FaqPageStyles';


const FaqPage = (props) => {


    console.log("I am FaqPage props: ", props);
    const classes = useStyles();


    return (
        <Box>
            <Grid container>
                {/* Header left margin */}
                <Grid item xs={0}></Grid>
                {/* Header main container */}
                <Grid item xs={12}>
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer} >
                            <Typography variant="h3" className={classes.headerTitle} >
                                FAQ'S
                            </Typography>
                            <Button
                                component={Link}
                                to="/reservations"
                                className={classes.bookOnlineButton}
                                variant="contained"
                                color="default"
                                size="small"
                                endIcon={<PlayArrowIcon style={{ marginLeft: -8 }} 
                                
                            />} >
                                Book Online
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item xs={0}></Grid>
                {/* Faqs container margin left */}
                <Grid item xs={0} sm={1} md={2}></Grid>
                {/* MAIN FAQS CONTAINER */}
                <Grid item xs={12} sm={10} md={8} >
                    <Box className={classes.faqsContainer}>
                        <Box className={classes.faqsContainerOverlay}>
                            <Faqs />
                            {/* Return home container */}
                            <Box className={classes.returnHomeLinkBox}>
                                <Button component='Link' to="/" variant='contained'
                                    className={classes.returnHomeLink} label="home">
                                    <Typography>
                                        Go To Homepage
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


FaqPage.propTypes = {

}


export default FaqPage;

