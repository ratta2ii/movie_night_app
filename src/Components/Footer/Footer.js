import React from 'react'
import { Link } from "react-router-dom";
// Styling
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import companyLogoIcon from './../../Assets/Icons/company-logo-icon.png';
import FaceBookIcon from './../../Assets/Icons/facebook-icon.png';
import InstagramIcon from './../../Assets/Icons/instagram-icon.png';
import TwitterIcon from './../../Assets/Icons/twitter-icon.png';
import useStyles from "./FooterStyles";


const Footer = (props) => {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
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
                            {/* Hidden logo (small viewport only) */}
                            <a href="http://azeventteam.com">
                                <img src={companyLogoIcon}
                                    alt='company logo'
                                    className={classes.hiddenCompanyLogo} />
                            </a>
                            {/* Social Media Icons Container */}
                            <Box className={classes.socialIconsContainer} >
                                <a href="https://www.facebook.com/azeventteam/">
                                    <img src={FaceBookIcon} alt='Facebook link'
                                        className={classes.socialMediaIcons} />
                                </a>
                                <Box className={classes.companyLogoBox} >
                                    <a href="http://azeventteam.com">
                                        <img src={companyLogoIcon}
                                            alt='company logo'
                                            className={classes.companyLogoIcon} />
                                    </a>
                                </Box>
                                <a href="https://www.instagram.com/">

                                    <img src={InstagramIcon} alt='Instagram link'
                                        className={classes.socialMediaIcons} />
                                </a>
                                <a href="https://twitter.com/">

                                    <img src={TwitterIcon} alt='Twitter link'
                                        className={classes.socialMediaIcons} />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


Footer.propTypes = {

}


export default withStyles(useStyles)(Footer);
