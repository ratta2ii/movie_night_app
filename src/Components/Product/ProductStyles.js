import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
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
            // backgroundColor: 'blue',
            maxWidth: 325,
        },
    },
    CardMedia: {
        height: "180px",
        [theme.breakpoints.down('xs')]: {
            height: '200px',
        },
    },
    title: {
        fontSize: '1.1rem',
        textAlign: 'center',
        padding: '0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.down('xs')]: {

        },
    },
    action: {
        margin: "0 0 0 7px",
        // display: 'flex',
        padding: 5,
        backgroundColor: 'floralwhite',
    },
    addWishText: {
        // margin: "0 auto 0 -25px",
        fontSize: '.6rem',
    },
}));


export default useStyles;