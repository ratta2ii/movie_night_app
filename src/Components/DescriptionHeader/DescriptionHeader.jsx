import React from "react";
import { Paper, Typography } from "@material-ui/core";
import useStyles from "./DescriptionHeaderStyles";

function DescriptionHeader() {
    const classes = useStyles();

    return (
        <Paper className={classes.mainTitlePaper}>
            <Typography variant="h1" className={classes.mainTitle}>
                OUTDOOR MOVIE EVENTS & MORE...
            </Typography>
        </Paper>
    );
}

export default DescriptionHeader;