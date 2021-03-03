import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        float: "left",
        marginRight: 15,
        // backgroundColor: 'red',
        [theme.breakpoints.down("xs")]: {},
    },
    wrapper: {
        position: "relative",
    },
    buttonProgress: {
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12,
    },
}));

export default function CircularIntegration(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const timer = React.useRef();

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    };

    return (
        <div className={classes.root}>
            <div onClick={handleButtonClick} className={classes.wrapper}>
                {/* //! The attributes are props passed in from the parents, including the class */}
                <Button
                    onClick={props.eventName}
                    className={props.customClassName}
                    startIcon={props.startIcon}
                    disabled={loading}
                >
                    {props.name}
                </Button>
                {loading && (
                    <CircularProgress size={24} className={classes.buttonProgress} />
                )}
            </div>
        </div>
    );
}
