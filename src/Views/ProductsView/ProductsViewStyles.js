import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/film4-upside.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "",
        diplay: 'flex',
    },
    mainGridContainer: {
        marginTop: -85,
        [theme.breakpoints.down('sm')]: {
            marginTop: '115px',
        },
        [theme.breakpoints.down('xs')]: {
            
        },
    },
    headerContainer: {
        height: 115,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
        backgroundColor: '#2196f326',
        marginBottom: '120px',
        boxShadow: 'inset 0px 0px 10px #aeaeae',
        [theme.breakpoints.down('sm')]: {
            // margin: '175px auto 50px auto'
            width: '100%',
            marginTop: 0,
            height: 100
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 50,
            height: 100
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
        // light matching color
        // backgroundColor: '#e0e0e0b8',
        backgroundColor: '#c6c6c65e',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    headerTitle: {
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