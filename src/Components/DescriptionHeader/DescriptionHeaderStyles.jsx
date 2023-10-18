import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainTitlePaper: {
        backgroundColor: '#1e88e5',
        zIndex: '1',
        width: '30%',
        textAlign: 'center',
        textTransform: 'capitalize',
        margin: '-85px auto 155px auto',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        [theme.breakpoints.down('md')]: {
            width: '50%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '65%',
            marginTop: '115px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            marginTop: 125, 
            marginBottom: 90,
        },
    },
    mainTitle: {
        textAlign: 'center',
        padding: 15,
        fontSize: '1.1rem',
        color: 'floralwhite',
        letterSpacing: 'revert',
        wordSpacing: '.175em',
        fontFamily: 'math, serif',
        fontWeight: 500,
        "&:hover": { // Override global styling on h1:hover
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
        [theme.breakpoints.down('sm')]: {
            wordSpacing: 'unset',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '.9rem',
        },
    },
}));

export default useStyles;
