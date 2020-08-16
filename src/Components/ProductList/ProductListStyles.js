import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/film4.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
        padding: '0 5%'
    },
    mainGridContainer: {
        backgroundColor: '#010308', 
    },
    headerContainer: {
        height: 175,
        background: `url('${bg_image}') no-repeat`,
        backgroundSize: '100%',
        marginTop: '10px',
        marginBottom: '40px',
        borderRadius: '3px',
        boxShadow: 'inset 0px 0px 10px slategray',
        [theme.breakpoints.down('md')]: {
            height: 140,
            margin: '50px auto 40px auto'
        },
        [theme.breakpoints.down('sm')]: {
            height: 110,
            margin: '20px auto 40px auto'
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
        fontSize: '9rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#1818181a',
        [theme.breakpoints.down('md')]: {
            fontSize: '7.5em',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5em',
        },
    },
    bookOnlineButton: {
        position: 'absolute',
        width: 120,
        bottom: 15,
        right: 20,
        [theme.breakpoints.down('md')]: {
            bottom: 10, 
            right: 15
        },
        [theme.breakpoints.down('sm')]: {
            width: 110,
            bottom: 5, 
            right: 10
        },
        [theme.breakpoints.down('xs')]: {
            width: 100,
            bottom: 5, 
            right: 10
        },
    },
}));


export default useStyles;
