import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box';
import ReserveForm from './../../Components/ReserveForm/ReserveForm';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import useStyles from './ReservationsStyles';


function Reservations(props) {


    const classes = useStyles();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={3} >
                    <Box className={classes.textContainer} >
                        <Typography className={classes.text} >
                            Thank you so much for visiting AZ Movie Nights. Please don't hesitate to give us a call anytime. We would love to hear from you. If we happen to miss you after hours, or for any other reason, please go ahead and leave a message and someone will return your call as soon as possible. Thank you again for visiting, we appreciate your business, and we looking forward to serving you at your next event.
                        </Typography>
                        <Box className={classes.thankYouContainer} >
                            <Typography className={classes.text} >
                                Thank you,
                            </Typography>
                            <Typography className={classes.text} >
                                AZ Event Team
                            </Typography>
                        </Box>
                        <Typography className={classes.phoneNumber}>
                            (602) 339-9550
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <ReserveForm />
                </Grid>
            </Grid>
        </Box>
    );
}


export default Reservations;