import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {},
    categoryContainer: {
        width: "90%",
        height: 300,
        margin: "20px auto",
        color: "white",
        fontWeight: 500,
        fontSize: 20,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("lg")]: {
            backgroundColor: "cornflowerblue",
        },
        [theme.breakpoints.down("md")]: {
            backgroundColor: "red",
        },
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "white",
        },
        [theme.breakpoints.down("xs")]: {
            backgroundColor: "blue",
        },
    },
}));

export default useStyles;