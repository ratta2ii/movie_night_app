import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 50,
        },
    },
    footerContainer: {
        height: 250,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
        boxShadow: '0px 0px 5px #161f3a',
        padding: 0,
        [theme.breakpoints.down('md')]: {
            marginTop: 15,
        }, 
        [theme.breakpoints.down('sm')]: {
            margin: '0px auto 0px auto'
        },
    },
    footerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0103079c',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    producFooterTitle: {
        fontSize: '6rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#00000024',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    bookOnlineButton: {
        color: 'white',
        backgroundColor: '#ff0100',
        padding: 12,
        fontSize: 'large',
    },
}));


export default useStyles;
