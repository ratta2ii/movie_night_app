
// import PropTypes from 'prop-types'
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import Paper from '@material-ui/core/Paper';
import React from 'react'
import { Link } from "react-router-dom";
// Styling
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./FooterStyles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import BookOnlineButton from './../../Assets/Images/book-online-button.png';


const Footer = (props) => {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Footer left margin */}
                <Grid item xs={0} sm={0} md={0}></Grid>
                <Grid item xs={12} sm={12} md={12}>
                    {/* Footer deep container */}
                    <Box className={classes.footerContainer} >
                        {/* Footer overlay container */}
                        <Box className={classes.footerOverlayContainer} >
                            <Link to="/reservations">
                                <img src={BookOnlineButton}
                                    alt='book movie theatre rental online now button'
                                    className={classes.bookOnlineButton} />
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item xs={0} sm={1} md={2}></Grid>
            </Grid>
        </Box>
    )
}


// Footer.propTypes = {

// }


export default withStyles(useStyles)(Footer);
