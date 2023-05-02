import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useStyles from './ReserveFormStyles';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Calendar from './../Calendar/Calendar';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { getProductsForEmail } from './../../Redux/Reducers/currentCartListReducer';


const ReserveForm = (props) => {
    const contactForm = useRef();
    const { handleHideFormMessage } = props;
    const classes = useStyles();
    const productTitles = useSelector(getProductsForEmail);
    const [displayForm, setDisplayForm] = useState(true);

    // * These are drilled down to the Calendar component * //
    const [selectedDate, setDate] = useState(null);
    const handleDateChange = (date) => {
        setDate(new Date(date));
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            contactForm.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                if (result.status === 200) {
                    // The success message is the parent component "Reservations"
                    console.log("RESULT STATUS IS 200");
                }
            }, (error) => {
                console.log(error.text);
            });
            
            setTimeout(() => {
            handleHideFormMessage(true);
            setDisplayForm(false);
        }, 500)
    };

    // /* This is utilizing the FormSpree email service */
    // const handleSubmitForm = (ev) => {
    //     ev.preventDefault();
    //     const form = ev.target;
    //     const data = new FormData(form);
    //     const xhr = new XMLHttpRequest();
    //     xhr.open(form.method, form.action);
    //     xhr.setRequestHeader("Accept", "application/json");
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState !== XMLHttpRequest.DONE) return;
    //         if (xhr.status === 200) {
    //             form.reset();
    //             // The success message is the parent component "Reservations"
    //             handleHideFormMessage(true);
    //         } else {
    //             // The success message is the parent component "Reservations"
    //             handleHideFormMessage(true);
    //         }
    //     };
    //     xhr.send(data);
    //     setTimeout(() => {
    //         setDisplayForm(false);
    //     }, 500)
    // }

    const validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Required';
        }
        return errors;
    };


    return (
        <Box className={classes.root}
            style={{ display: (displayForm) ? 'box' : 'none' }}
        >
            <Box >
                <Form
                    onSubmit={handleSubmitForm}
                    validate={validate}
                    render={({ form, handleSubmit, reset, submitting, pristine, values }) => (
                        <form
                            ref={contactForm}
                            onSubmit={handleSubmitForm}
                            onReset={reset}
                        >
                            <Paper className={classes.paper} >
                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            color="primary"
                                            fullWidth
                                            required
                                            name="firstName"
                                            component={TextField}
                                            type="text"
                                            label="First Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            fullWidth
                                            required
                                            name="lastName"
                                            component={TextField}
                                            type="text"
                                            label="Last Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            name="email"
                                            fullWidth
                                            required
                                            component={TextField}
                                            type="email"
                                            label="Email"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            name="phoneNumber"
                                            fullWidth
                                            required
                                            component={TextField}
                                            type="phone"
                                            label="Phone Number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            variant="filled"
                                            name="address"
                                            fullWidth
                                            required
                                            component={TextField}
                                            type="address"
                                            label="Address of Event"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}></Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            fullWidth
                                            required
                                            name="city"
                                            component={TextField}
                                            type="text"
                                            label="City of Event"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}></Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Calendar
                                            selectedDate={selectedDate}
                                            setDate={setDate}
                                            handleDateChange={handleDateChange}
                                        />
                                    </Grid>
                                    {/* 
                                    This hidden input adds the date selected on the calendar into
                                    the data submitted with the form  
                                    */}
                                    <input
                                        style={{ display: 'none' }}
                                        type="text"
                                        name="date"
                                        value={selectedDate}
                                    />
                                    {/* 
                                    This is the input field that will include all the items from
                                    the cartList into the email reservartion sent 
                                    */}
                                    <input
                                        style={{ display: 'none' }}
                                        type="text"
                                        name="products"
                                        value={productTitles}
                                    />
                                    {/* Message (text area*/}
                                    <Grid item xs={12}>
                                        <Field
                                            fullWidth
                                            name="message"
                                            component={TextField}
                                            multiline
                                            label="Message"
                                            placeholder="Write your message here..."
                                            rows={6}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    {/*
                                 //? Update buttons and write functionality to reset form ?\\ 
                                */}
                                    <Grid item style={{ marginTop: 16 }}>
                                        <Button
                                            type="button"
                                            variant="contained"
                                            onClick={() => {
                                                form.restart();
                                                setDate(null);
                                            }}
                                        // disabled={submitting || pristine}
                                        >
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid item style={{ marginTop: 16 }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                            {/* 
                            //! Returns a json object in the UI of the form entries testing !\\
                            <pre>{JSON.stringify(values, 0, 2)}</pre> 
                            */}
                        </form>
                    )}
                />
            </Box>
        </Box>
    );
}


export default ReserveForm;









