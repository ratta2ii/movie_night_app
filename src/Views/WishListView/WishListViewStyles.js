import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
    },
    contentPaperContainer: {
        backgroundColor: '#88979a',
        boxShadow: 'inset 0px 0px 5px black',
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
    },
    headerContainer: {
        height: 150,
        marginTop: -85,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
        marginBottom: '120px',
        boxShadow: 'inset 0px 0px 10px #aeaeae',
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
        backgroundColor: '#f2c299d1',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    contentOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f2c299d1',
        borderRadius: '3px',
        padding: 25,
    },
    headerTitle: {
        fontSize: '8rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#2d221145',
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