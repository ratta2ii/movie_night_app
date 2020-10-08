import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import ReserveForm from './../../Components/ReserveForm/ReserveForm';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import useStyles from './ReservationsStyles';


function Reservations(props) {


    const classes = useStyles();
    // This hook will control whether the form info is hidden and the email response is displayed, based on whether a users a form was succesfully sent. These actions are in a child Component, so the handleHideFormMessage function will drilled down in props, and called in the child when the form is submitted. 
    const [hideInfo, setHideInfo] = useState(null)


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const handleHideFormMessage = (emailSuccessStatus) => {
        if (emailSuccessStatus) setHideInfo(true);
        else setHideInfo(false);
    }


    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={12} md={5} lg={4} >
                    <Box className={classes.textContainer}
                        // This will hide form info in child component in order to display instructions upon a succesful http request
                        style={{
                            display: (hideInfo === null) ? 'block' : 'none'
                        }}>
                        <Typography className={classes.text} >
                            Thank you for visiting AZ Movie Nights. Please don't hesitate to give us a call with any additional questions you might have. We would love to hear from you.
                        </Typography>
                        <Typography className={classes.text} >
                            If you prefer to reach out online, go ahead and use the contact form here and one of our staff members will be in touch. You may also continue through checkout with your cart, in which case someone will also contact you to go over any further details about your event.
                        </Typography>
                        <Typography className={classes.text} >
                            We appreciate your business, and we look forward to serving you at your next outdoor movie night event.
                        </Typography>
                        <Box className={classes.thankYouContainer} >
                            <Typography className={classes.text} >
                                Thank you!
                            </Typography>
                            <Typography className={classes.phoneNumber}>
                            (555) 555-5555
                        </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} lg={5}>
                    <ReserveForm handleHideFormMessage={handleHideFormMessage} />
                </Grid>
            </Grid>
            <Box className={classes.emailResponse}
                style={{
                    display: (hideInfo === null) ? 'none' : 'block',
                }}>
                <Typography variant="h5" className={classes.importantHeader} >
                    IMPORTANT
                </Typography>
                {(hideInfo) ? (
                    <Box>
                        <Box className={classes.emailResponseText}>
                            YOUR RESERVATION WAS A SUCCESS! Your shopping cart, along with your personal information, has been sent been sent to us at here at AZ Movie Nights. Our staff will take a look at your reservation right away, and then contact you immediately to discuss any specifics concerning your event.
                            </Box>
                        <Box>
                            If you prefer to speak to someone now, please give us a call at <span className={classes.phoneNumber}>(555) 555-5555</span>. Thank you so much for reserving with us today, we really apprreciate your business. We look forward to speaking with you soon.
                            </Box>
                        <Box className={classes.emailResponseText}>
                            Thank You
                        </Box>
                        {/* Notice this is a ternary operator */}
                    </Box>) : (
                        <Box>
                            THERE WAS AN ERROR MAKING YOUR RESERVATION! Please try sending the form again, or feel free to give us a call at <span className={classes.phoneNumber}>(555) 555-5555</span>. We apologize for any inconvenience. Thank you.
                        </Box>)
                }
            </Box>
        </Box>
    );
}


export default Reservations;





