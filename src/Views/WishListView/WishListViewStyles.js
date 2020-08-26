import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',     
    },
    contentPaperContainer: {
        minHeight: 500,
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
        height: 150,
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
            height: 130
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#db6e56de',
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
        color: '#82423566',
        opacity: '.7',
        [theme.breakpoints.down('md')]: {
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
    productsButton: {
        padding: '10px 20px',
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        color: 'floralwhite',
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
        background: 'linear-gradient(90deg, #4DD0E1 0%, #4DD0E1 40%, #00bcd4 100%)',
        color: 'floralwhite',
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            bottom: 25,
            right: 25,
        },
        [theme.breakpoints.down('xs')]: {
            bottom: 60,
            right: 10,
        },
    },
    backToProducts: {
        color: 'dodgerblue'
    },
}));


export default useStyles;