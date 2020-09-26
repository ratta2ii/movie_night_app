import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import useStyles from './HeaderStyles';


const Header = () => {


    const classes = useStyles();


    return (
        <Box>
            <Grid container>
                {/* Header left margin */}
                <Grid item></Grid>
                {/* Header main container */}
                <Grid item xs={12}>
                    <Box className={classes.headerContainer} >
                        <Box className={classes.headerOverlayContainer} >
                            <Typography variant="h3" className={classes.headerTitle} >
                                {/* Jareb likes these so add again at later date */}
                                {/* FAQ'S */}
                            </Typography>
                            <Button
                                component={Link}
                                to="/reservations"
                                className={classes.contactUsButton}
                                variant="contained"
                                color="primary"
                                size="small"
                                endIcon={<PlayArrowIcon style={{ marginLeft: -8 }}
                                />} >
                                Contact Us
                        </Button>
                        </Box>
                    </Box>
                </Grid>
                {/* Header right margin */}
                <Grid item></Grid>
            </Grid>
        </Box>
    );
}

export default Header;