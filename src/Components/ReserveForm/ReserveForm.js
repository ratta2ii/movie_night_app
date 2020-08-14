import React, { useState } from 'react';
import useStyles from './ReserveFormStyles';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Calendar from './../Calendar/Calendar';
import Box from '@material-ui/core/Box';



// import { Select } from 'final-form-material-ui';
// import { Link } from '@material-ui/core';
// import { MenuItem } from '@material-ui/core';
// import { Typography } from '@material-ui/core';


function ReserveForm() {

    const classes = useStyles();
    // * These are drilled down to the Calendar component * //
    const [selectedDate, setDate] = useState(null);
    const handleDateChange = (date) => {
        setDate(date);
    };
    const [emailSuccessStatus, setEmailSuccessStatus] = useState(null);


    const onSubmit = async (values) => {
        // console.log(values.names);
        // console.log(values.email);
        // console.log(values.phoneNumber);
        // console.log(values.date);
        // console.log(values.message);
        values.date = selectedDate
        console.log(values);
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(300);
        window.alert(JSON.stringify(values, 0, 2));
    };


    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setEmailSuccessStatus("YOUR RESERVATION WAS A SUCCESS!");
            } else {
                setEmailSuccessStatus("THERE WAS AN ERROR MAKING YOUR RESERVATION!");
            }
        };
        //! IMPORTANT TO UNCOMMENT IN ORDER FOR EMAILS TO GO THROUGH !\\
        // xhr.send(data);
    }


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
        <Box className={classes.root} >
            <Form
                onSubmit={onSubmit}
                // initialValues={{ date: selectedDate }}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values }) => (
                    <form onSubmit={submitForm} noValidate action="https://formspree.io/mdoddgdr"
                        method="POST" >
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
                                        onClick={reset}
                                        disabled={submitting || pristine}
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
                        //! Returns a json object in the UI of the form entries !\\
                        <pre>{JSON.stringify(values, 0, 2)}</pre> 
                        */}
                    </form>
                )}
            />
            <Box style={{padding: 5}}>
                {emailSuccessStatus}
            </Box>
        </Box>
    );
}


export default ReserveForm;

















