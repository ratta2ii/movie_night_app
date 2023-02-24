import { makeStyles } from '@material-ui/core/styles';
// import header_bg_image from './../../Assets/Images/bg12.png';

const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
    },
    headerContainer: {
        height: 200,
        marginTop: -185,
        //background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: 'cover',
        marginBottom: '120px',
        [theme.breakpoints.down('sm')]: {
            margin: '16px auto 80px auto'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom: 25,
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        /* backgroundColor: '#000000c4', */
    },
    headerTitle: {
        fontSize: '8rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#e7eaed47',
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
    contactUsButton: {
        position: 'absolute',
        bottom: 30,
        right: 35,
        color: 'white',
        background: 'linear-gradient(90deg, #0D47A1 0%, #125fb7 40%, #0D47A1 100%)',
        padding: '10px 20px',
        fontSize: '.8rem',
        [theme.breakpoints.down('sm')]: {
            padding: '7px 0px 7px 4px',
            width: 120,
            bottom: 12,
            right: 16,
        },
        [theme.breakpoints.down('xs')]: {
            bottom: 10,
            right: 22,
        },
    },
}));

export default useStyles;