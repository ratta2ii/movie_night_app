import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            maxWidth: 325,
        },
    },
    CardMedia: {
        height: "180px",
        [theme.breakpoints.down('xs')]: {
            height: '200px',
        },
        ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            height: 160,
        },
    },
    title: {
        fontSize: '1.1rem',
        textAlign: 'center',
        padding: '0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        },
    },
    action: {
        margin: "0 0 0 7px",
        padding: 5,
        backgroundColor: 'floralwhite',
    },
    addWishText: {
        fontSize: '.6rem',
    },
}));


export default useStyles;