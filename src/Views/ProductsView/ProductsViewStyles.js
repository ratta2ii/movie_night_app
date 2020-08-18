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
        height: 150,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
        marginBottom: '100px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: 0,
            height: 130
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 50,
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#010307d9',
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
        color: '#2196f34a',
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
    bookOnlineButton: {
        position: 'absolute',
        width: 140,
        bottom: 12,
        right: 15,
        color: 'white',
        backgroundColor: '#ff0100',
        padding: 8,
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
            bottom: 7,
            right: 7,
        },
    },
}));


export default useStyles;