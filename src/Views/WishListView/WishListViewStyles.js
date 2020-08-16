import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/film4.jpg';
import shadows from '@material-ui/core/styles/shadows';


const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "green"
    },
    contentPaperContainer: {
        backgroundColor: '#88979a',
        boxShadow: 'inset 0px 0px 5px black',
        padding: 15
        // height: 300
    },
    headerContainer: {
        height: 175,
        background: `url('${bg_image}') no-repeat`,
        backgroundSize: '100%',
        backgroundColor: '#2196f326',
        marginBottom: '50px',
        borderRadius: '3px',
        boxShadow: 'inset 0px 0px 10px #aeaeae',
        [theme.breakpoints.down('sm')]: {
            margin: '175px auto 50px auto'
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            marginTop: 150
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#c6c6c65e',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    headerTitle: {
        fontSize: '7rem',
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
}));


export default useStyles;