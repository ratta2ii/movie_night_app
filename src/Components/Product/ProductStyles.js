import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 280,
        minWidth: 215,
        margin: 20,
        [theme.breakpoints.down('sm')]: {
            margin: ' 20px auto',
            maxWidth: 260,
        },
    },
    CardMedia: {
        height: "190px",
        backgroundPosition: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '190px',
        },
    },
    title: {
        fontSize: '1rem',
        textAlign: 'center',
        padding: '0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        },
    },
    action: {
        margin: "0 0 0 15px",
        padding: 5,
        backgroundColor: 'floralwhite',
    },
    addWishText: {
        fontSize: '.6rem',
    },
}));

export default useStyles;