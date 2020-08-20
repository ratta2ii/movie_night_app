import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import Box from '@material-ui/core/Box';


const styles = {
    grid: {
        width: "100%"
    }
};


function Calendar(props) {


    return (
        <Box>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid item xs={12}>
                    <DatePicker
                        variant="filled"
                        required
                        fullWidth
                        keyboard
                        placeholder="MM/DD/YYYY"
                        format={"MM/DD/YYYY"}
                        mask={(value) =>
                            value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : []
                        }
                        value={props.selectedDate}
                        onChange={props.handleDateChange}
                        disableOpenOnEnter
                        animateYearScrolling={false}
                        autoOk={false}
                        clearable
                        onInputChange={(e) => console.log("Keyboard:", e.target.value)}
                    />
                </Grid>
                {/* 
                    //! This can be used to test the calendar (Erase later) !\\ 
                    <Box>{props.selectedDate === null ? "Its null" : "Not Null"}</Box>
                    <Box>{JSON.stringify(props.selectedDate)}</Box> 
                */}
            </MuiPickersUtilsProvider>
        </Box>
    );
}


Calendar.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Calendar);