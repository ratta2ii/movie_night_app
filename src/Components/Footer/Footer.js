import React from 'react'
import { Link } from "react-router-dom";
// Styling
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./FooterStyles";


const Footer = (props) => {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Grid container>
                {/* Footer left margin */}
                {/* <Grid item></Grid> */}
                <Grid item xs={12} sm={12} md={12}>
                    {/* Footer deep container */}
                    <Box className={classes.footerContainer} >
                        {/* Footer overlay container */}
                        <Box className={classes.footerOverlayContainer} >
                            <Button
                                component={Link}
                                to="/reservations"
                                className={classes.bookOnlineButton}
                                variant="contained"
                                color="primary"
                                size="small"
                                endIcon={<PlayArrowIcon style={{ marginLeft: -8 }} />}
                            >
                                CONTACT US
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                {/* <Grid item sm={1} md={2}></Grid> */}
            </Grid>
        </Box>
    )
}


Footer.propTypes = {

}


export default withStyles(useStyles)(Footer);
