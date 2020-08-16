import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "",
        diplay: 'flex',
        margin: '125px auto',
        fontSize: '3em',
        padding: '0 5%',
        [theme.breakpoints.down('md')]: {
            marginTop: '60px',
            marginBottom: '60px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: 15,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 500,
        },
    },
    paper: {
        backgroundColor: '#010308',
    },
    mainGridContainer: {
        background: `url('${bg_image}') no-repeat`,
        backgroundSize: '100% 100%',
        borderRadius: '3px',
        boxShadow: '0px 0px 5px #161f3a',
        padding: 15,
    },
    leftGridContainer: {
        backgroundColor: '#010308',
        padding: '50px 0px 50px 70px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '70px 70px 0px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '30px 30px 0px',
        },
    },
    rightGridContainer: {
        backgroundColor: '#010308',
        padding: '70px',
        [theme.breakpoints.down('md')]: {
            padding: '70px 70px 70px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '30px',
        },
    },
    movieNightImage: {
        width: '100%'
    },
    title: {
        width: '100%',
        fontSize: '2.75rem',
        fontWeight: '400',
        textAlign: 'center',
        paddingBottom: '25px',
        borderBottom: '8px solid #0068ff',
        margin: '0 auto 40px',
        color: '#ffaa00',
        letterSpacing: '.005em',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.75rem'
        },
    },
    companyDescription: {
        color: 'floralWhite',
        marginBottom: '15px',
        fontSize: '1.2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        },

    },
    bookOnlineButton: {
        position: 'absolute',
        width: 120,
        // bottom: 12,
        // right: 14,
    },
}));


export default useStyles;