import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',     
    },
    contentPaperContainer: {
        minHeight: 610,
        position: 'relative',
        padding: '25px 50px 150px 50px',
        marginBottom: 120,
        marginTop: -50,
        [theme.breakpoints.down('md')]: {
            margin: '-50px auto 120px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: -50,
            padding: 25,
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: 550,
            padding: 15,
            marginTop: 5,
            marginBottom: 30,
        },
    },
    mainGridContent: {
        [theme.breakpoints.down('sm')]: {
            padding: '0 5%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0',
        },
    },
    headerContainer: {
        height: 100,
        marginTop: -85,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
        marginBottom: '120px',
        [theme.breakpoints.down('sm')]: {
            margin: '116px auto 120px auto'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom: 25,
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0103079c',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    headerTitle: {
        fontSize: '8rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#ffffff33',
        opacity: '.7',
        [theme.breakpoints.down('md')]: {
            display: 'none',
            fontSize: '6.3rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4.3rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.3rem',
        },
    },
    productsButtonContainer: {
        marginTop: 10,
        marginBottom: 0,
    },
    checkOutButton: {
        position: 'absolute',
        width: 200,
        bottom: 25,
        right: 50,
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        color: 'floralwhite',
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            bottom: 25,
            right: 25,
        },
        [theme.breakpoints.down('xs')]: {
            bottom: 10,
            right: 10,
        },
    },
    backToProductsButton2: {
        position: 'absolute',
        width: 200,
        bottom: 25,
        left: 50,
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            left: 'unset',
            bottom: 75,
            right: 25,
        },
        [theme.breakpoints.down('xs')]: {
            bottom: 62,
            right: 10,
        },
    },
    backToProducts: {
        color: 'dodgerblue'
    },
    bookOnlineButton: {
        position: 'absolute',
        width: 160,
        bottom: 12,
        right: 15,
        color: 'white',
        backgroundColor: '#ff0100',
        padding: '10px 0 10px 5px',
        [theme.breakpoints.down('sm')]: {
            width: 140,
            fontSize: 'small',
            bottom: 12,
            right: 12,
        },
        [theme.breakpoints.down('xs')]: {
            padding: '7px 0px 7px 4px',
            width: 120,
            fontSize: 'smaller',
            bottom: 8,
            right: 8,
        },
    },
}));


export default useStyles;