import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/film4.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    contentPaperContainer: {
        backgroundColor: '#88979a',
        boxShadow: 'inset 0px 0px 5px black',
        padding: 15,
    },
    headerContainer: {
        height: 120,
        marginTop: -85,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
        backgroundColor: '#2196f326',
        marginBottom: '120px',
        boxShadow: 'inset 0px 0px 10px #aeaeae',
        [theme.breakpoints.down('sm')]: {
            margin: '175px auto 50px auto'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 150,
            height: 100
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#e0e0e0b8',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    headerTitle: {
        fontSize: '7rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#00000024',
    },
    bookOnlineButton: {
        position: 'absolute',
        width: 120,
        bottom: 15,
        right: 15,
    },
}));


export default useStyles;