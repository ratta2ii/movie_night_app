import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './HeaderStyles';

const Header = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Box className={classes.headerContainer} >
                <Box className={classes.headerOverlayContainer} >
                    <Typography variant="h3" className={classes.headerTitle} >
                    {/* Jareb likes these page title names displayed, so add again later?*/}
                    {/* FAQ'S */}
                    </Typography>
                    {/* <Button
                        component={Link}
                        to="/reservations"
                        className={classes.contactUsButton}
                        variant="contained"
                        color="primary"
                        size="small"
                        endIcon={<PlayArrowIcon style={{ marginLeft: -8 }}
                        />} >
                        Contact Us
                    </Button> */}
                </Box>
            </Box>
        </Fragment>
    );
}

export default Header;