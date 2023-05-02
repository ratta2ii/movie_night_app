import React, { useEffect, useState } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import companyLogoIcon from './../../Assets/Icons/company-logo-icon.png';
import FaceBookIcon from './../../Assets/Icons/facebook-icon.png';
import InstagramIcon from './../../Assets/Icons/instagram-icon.png';
import TwitterIcon from './../../Assets/Icons/twitter-icon.png';
import useStyles from "./FooterStyles";
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const classes = useStyles();

    // BEGINNING: Janky way to fix footer position for concessions.
    let pathname = useLocation().pathname;
    let screenWidth = window.screen.width;
    const [footerPosition, setFooterPosition] = useState('relative');
    useEffect(() => {
        if (pathname === '/products/concessions' && screenWidth > 960)
            setFooterPosition("absolute");
        else 
            setFooterPosition('relative');
    }, [pathname, screenWidth]);
    // END

    return (
        <Box className={classes.root} style={{position: footerPosition}}>
            <Grid container>
                <Grid item xs={12}>
                    {/* Footer deep container */}
                    <Box className={classes.footerContainer} >
                        {/* Footer overlay container */}
                        <Box className={classes.footerOverlayContainer} >
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

export default withStyles(useStyles)(Footer);
