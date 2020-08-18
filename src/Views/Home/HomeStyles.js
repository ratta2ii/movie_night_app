import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/sunset.jpeg';


export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-85px'
    },
    mainTitlePaper: {
        backgroundColor: '#2196f3',
        zIndex: '1',
        width: '40%',
        textAlign: 'center',
        textTransform: 'capitalize',
        margin: '0 auto',
        opacity: '.75',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        [theme.breakpoints.down('md')]: {
            width: '50%',
        }, 
        [theme.breakpoints.down('sm')]: {
            width: '65%',
            marginTop: '200px',
        }, 
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            background: '#2196f3',
        }, 
    },
    mainTitle: {
        textAlign: 'center',
        padding: 15,
        fontSize: '1.1rem',
        color: 'floralwhite',
        fontWeight: '500',
        letterSpacing: 'revert',
        wordSpacing: '.175em',
        [theme.breakpoints.down('sm')]: {
            wordSpacing: 'unset',
        }, 
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        }, 
    },
    headerContainer: {
        height: 215,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
        backgroundPositionY: '-350px',
        marginTop: '10px',
        marginBottom: '40px',
        borderRadius: '3px',
        boxShadow: 'inset 0px 0px 10px #000000a6',
        [theme.breakpoints.down('lg')]: {
            backgroundPositionY: '-300px',
        },
        [theme.breakpoints.down('md')]: {
            height: 140,
            margin: '50px auto 40px auto',
            backgroundPositionY: '-250px',
        },
        [theme.breakpoints.down('sm')]: {
            height: 110,
            margin: '20px auto 40px auto',
            backgroundPositionY: '-165px',
        },
        [theme.breakpoints.down('xs')]: {
            backgroundPositionY: '-50px',
            height: 90,
            marginTop: -29,
            padding: '0',
            marginBottom: 50,
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    productHeaderTitle: {
        fontSize: '11.5rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#0000003d',
        opacity: '.7',
        [theme.breakpoints.down('lg')]: {
            fontSize: '10rem',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '8.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '6rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.1rem',
        },
    },
    bookOnlineButton: {
        position: 'absolute',
        width: 140,
        bottom: 12,
        right: 15,
        color: 'white',
        backgroundColor: '#ff0100',
        padding: 8,
        [theme.breakpoints.down('md')]: {

        },
        [theme.breakpoints.down('sm')]: {
            width: 130,
            padding: 6,
            fontSize: 'small',
            bottom: 12,
            right: 12,
        },
        [theme.breakpoints.down('xs')]: {
            width: 110,
            padding: 6,
            fontSize: 'x-small',
            bottom: 5,
            right: 5,
        },
    },
}));


export default useStyles;