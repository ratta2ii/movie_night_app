import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
    },
    mainGridContainer: {
        marginTop: -85,
        [theme.breakpoints.down('sm')]: {
            marginTop: '115px',
        },
    },
    headerContainer: {
        height: 100,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: 'cover',
        marginBottom: '90px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: 0,
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 50,
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#010307c2',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    headerTitle: {
        fontSize: '8rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#3b4f8db5',
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
    productListContainer: {
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#2e406c54',
            padding: '12% 0',
        },
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