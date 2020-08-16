import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 370,
        margin: '0 auto',
        [theme.breakpoints.down('lg')]: {
            // backgroundColor: 'pink',
            maxWidth: '',
        },
        [theme.breakpoints.down('md')]: {
            // backgroundColor: 'green',
            maxWidth: '',
        },
        [theme.breakpoints.down('sm')]: {
            // backgroundColor: 'red',
        },
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'blue',
            maxWidth: 312,
        },
    },
    CardMedia: {
        height: "220px",
        [theme.breakpoints.down('xs')]: {
            height: '200px',
        },
    },
    title: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.down('xs')]: {

        },
    },
    action: {
        margin: "0 0 0 10px",
        display: 'flex',
    },
    addWishText: {
        margin: "0 auto 0 25px",
        fontSize: '.65rem',
    },
    CardContent: {
        padding: '10px'
    },
}));


export default useStyles;