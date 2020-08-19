import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "",
        diplay: 'flex',
    },
    headerContainer: {
        height: 150,
        marginTop: -85,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
        marginBottom: '120px',
        [theme.breakpoints.down('sm')]: {
            margin: '116px auto 80px auto'
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
        backgroundColor: '#98989ae3',
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
        color: '#0d132330',
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
    faqsContainer: {
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100% 100%',
        borderRadius: '3px',
        marginBottom: 135,
        [theme.breakpoints.down('sm')]: {
            margin: '0 5% 25px 5%',
            marginBottom: 80,
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 5% 25px 5%',
        },
    },
    faqsContainerOverlay: {
        width: '100%',
        height: '100%',
        backgroundColor: '#98989ae3',
        padding: 25,
    },
    returnHomeLinkBox: {
        marginTop: 50,
        marginBottom: 0,
    },
    returnHomeLink: {
        padding: '10px 20px',
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        color: 'floralwhite',
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
