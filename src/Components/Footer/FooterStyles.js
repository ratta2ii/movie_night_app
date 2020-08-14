import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/film7black.jpeg';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 150
    },
    footerContainer: {
        height: 350,
        background: `url('${bg_image}') no-repeat`,
        backgroundSize: 'cover',
        backgroundColor: '#2196f326',
        borderRadius: '3px',
        borderTop: '1px solid #090e18',
        boxShadow: '0px 0px 5px #161f3a',
        padding: 0,
        [theme.breakpoints.down('sm')]: {
            margin: '175px auto 50px auto'
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            marginTop: 15,
        }
    },
    footerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#7f7f7fd4',
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
        '&:focus': {
            
        },
        '&:hover': {
            
        },
        '&:active': {

        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    bookOnlineButton: {
        width: 160,
        // position: 'absolute',
        // bottom: 12,
        // right: 14,
    },
}));


export default useStyles;
