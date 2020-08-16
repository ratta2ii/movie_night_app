import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "",
        diplay: 'flex',
        margin: 'auto',
        marginTop: 75,
        fontSize: '3em',
        padding: '0 5%',
        [theme.breakpoints.down('sm')]: {
            marginTop: 80,
            padding: 15,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 500,
            marginTop: 30,
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
    },
    leftGridContainer: {
        backgroundColor: '#010307d9',
        padding: '70px',
        [theme.breakpoints.down('md')]: {
            padding: '70px 70px 50px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '30px',
        },
    },
    rightGridContainer: {
        backgroundColor: '#010307d9',
        padding: '50px 70px 50px 0px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '10px 70px 70px 70px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0px 70px 70px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 30px 30px',
        },
    },
    movieNightImage: {
        width: '100%'
    },
    title: {
        width: '100%',
        fontSize: '2.75rem',
        textAlign: 'center',
        paddingBottom: '25px',
        borderBottom: '8px solid #0068ff',
        margin: '0 auto 40px',
        color: '#ffaa00',
        fontWeight: '400',
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