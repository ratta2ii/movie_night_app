import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/film20-cropped.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "",
        diplay: 'flex'
    },
    // media: {
    //     height: 250,
    // },
    productListComponent: {
    },
    mainGridContainer: {
    
    },
    headerContainer: {
        height: 150,
        background: `url('${bg_image}') no-repeat`,
        backgroundSize: '100%',
        backgroundColor: '#2196f326',
        marginBottom: '100px',
        borderRadius: '3px',
        boxShadow: '0px 0px 5px #161f3a',
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
        backgroundColor: '#7b7b7b30',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    productHeaderTitle: {
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
        position: 'absolute',
        width: 120,
        bottom: 12,
        right: 14,
    },
}));


export default useStyles;
