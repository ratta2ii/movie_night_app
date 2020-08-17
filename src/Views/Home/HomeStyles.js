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
        //textTransform: 'uppercase',
        letterSpacing: 'revert',
        wordSpacing: '.175em',
        textShadow: '0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #b0afaf, 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15), 2px 20px 0px rgba(206,153,62,0)',
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
        boxShadow: 'inset 0px 0px 10px slategray',
        [theme.breakpoints.down('lg')]: {
            
        },
        [theme.breakpoints.down('md')]: {
            height: 140,
            margin: '50px auto 40px auto',
            backgroundPositionY: '-200px',
        },
        [theme.breakpoints.down('sm')]: {
            height: 110,
            margin: '20px auto 40px auto',
            backgroundPositionY: '-100px',
        },
        [theme.breakpoints.down('xs')]: {
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
        backgroundColor: '#c6c6c65e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    productHeaderTitle: {
        fontSize: '6rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#00000024',
        opacity: '.7',
        [theme.breakpoints.down('md')]: {
            fontSize: '5.3rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4.3rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.3rem',
        },
    },
    bookOnlineButton: {
        position: 'absolute',
            width: 120,
            bottom: 12,
            right: 12,
    
        [theme.breakpoints.down('md')]: {
            width: 100,
        },
        [theme.breakpoints.down('sm')]: {
            width: 90,
            bottom: 5,
        },
        [theme.breakpoints.down('xs')]: {
            width: 80,
            right: 5,
        },
    },
}));


export default useStyles;