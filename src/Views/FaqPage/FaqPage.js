import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Custom components and styles
import Faqs from './../../Components/Faqs/Faqs';
import Header from './../../Components/Header/Header';
import useStyles from './FaqPageStyles';


const FaqPage = (props) => {


    const classes = useStyles();


    // To ensure the current screen opens at the top of the viewport
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Box>
            <Header />
            <Grid container>
                {/* Faqs container margin left */}
                <Grid item sm={1} md={2}></Grid>
                {/* MAIN FAQS CONTAINER */}
                <Grid item xs={12} sm={10} md={8} >
                    <Box className={classes.faqsContainer}>
                        <Box className={classes.faqsContainerOverlay}>
                            <Faqs />
                            {/* Return home container */}
                            <Box className={classes.returnHomeLinkBox}>
                                <Button component={Link} to="/" variant='contained'
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

