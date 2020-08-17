import React from 'react'
import { Link } from "react-router-dom";
import Faqs from './../../Components/Faqs/Faqs';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './FaqPageStyles';
import BookOnlineButton from './../../Assets/Images/book-online-button-rectangle.png';


const FaqPage = (props) => {


    console.log("I am FaqPage props: ", props);
    const classes = useStyles();


    return (
        <Box>
            <Grid container>
                {/* Header left margin */}
                <Grid item xs={0}></Grid>
                {/* Header Grid Container */}
                <Grid item xs={12}>
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer} >
                            <Typography variant="h3" className={classes.headerTitle} >
                                FAQ'S
                            </Typography>
                            <Link to="/reservations">
                                <img src={BookOnlineButton}
                                    alt='book movie theatre rental online now button'
                                    className={classes.bookOnlineButton} />
                            </Link>
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
                        <Faqs />
                    </Box>
                    {/* Return home container */}
                    <Box className={classes.returnHomeLinkBox}>
                        <Button component='Link' to="/" variant='contained'
                            className={classes.returnHomeLink} label="home">
                            <Typography>
                                Go To Homepage
                            </Typography>
                        </Button>
                    </Box>
                </Grid>





            </Grid>
        </Box>
    )
}


FaqPage.propTypes = {

}


export default FaqPage;


















// import React from 'react'
// import { Link } from "react-router-dom";
// import Box from '@material-ui/core/Box'
// import Grid from '@material-ui/core/Grid';
// import { Typography } from '@material-ui/core';
// import BookOnlineButton from './../../Assets/Images/book-online-button-rectangle.png';
// import Faqs from './../../Components/Faqs/Faqs';
// import useStyles from './FaqPageStyles';


// const FaqPage = (props) => {


//     console.log("I am FaqPage props: ", props);
//     const classes = useStyles();


//     return (
//         <Box>
//             <Grid container>
//                 {/* Header left margin */}
//                 <Grid item xs={0}></Grid>
//                 {/* Header Grid Container */}
//                 <Grid item xs={12}>
//                     <Box className={classes.headerContainer} >
//                         <Box className={classes.headerOverlayContainer} >
//                             <Typography variant="h3" className={classes.headerTitle} >
//                                 FAQ'S
//                             </Typography>
//                             <Link to="/reservations">
//                                 <img src={BookOnlineButton}
//                                     alt='book movie theatre rental online now button'
//                                     className={classes.bookOnlineButton} />
//                             </Link>
//                         </Box>
//                     </Box>
//                 </Grid>
//                 {/* Header right margin */}
//                 <Grid item xs={0}></Grid>


//                 {/* Faqs container margin left */}
//                 <Grid item xs={0} sm={1} md={2}></Grid>
//                 {/* MAIN FAQS CONTAINER */}
//                 <Grid item xs={12} sm={10} md={8} >
//                     <Box className={classes.faqsContainer}>
//                         <Box className={classes.overlayContainer} >
//                             <Faqs />
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }


// FaqPage.propTypes = {

// }


// export default FaqPage;
