import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/bg12copy.png';

const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
        margin: 'auto',
        marginTop: 90,
        fontSize: '3em',
        padding: '15px 3%',
        [theme.breakpoints.down('lg')]: {
            padding: '15px 0',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: 80,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 45,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 30,
        },
    },
    paper: {
        backgroundColor: '#010308',
    },
    mainGridContainer: {
        background: `url('${bg_image}') no-repeat`,
        backgroundSize: 'cover',
        borderRadius: '3px',
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: 'center center',
        },
    },
    leftGridContainer: {
        backgroundColor: '#04060ef5',
        padding: '100px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            padding: '60px 70px 60px 80px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '50px 0px 50px 50px',
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#010307d4',
            padding: '60px 70px 50px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '30px',
        },
    },
    rightGridContainer: {
        backgroundColor: '#04060ef5',
        padding: '50px 70px 50px 0px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            padding: '116px 80px 116px 0px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '0px 50px',
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#010307d4',
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
        textAlign: 'center',
        paddingBottom: '25px',
        borderBottom: '8px solid #2196f3',
        margin: '0 auto 30px',
        color: '#ffaa00',
        fontWeight: '400',
        letterSpacing: '.005em',
        textTransform: 'uppercase',
        fontSize: '2.5rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.6rem',
            margin: '10px auto 30px',
            paddingBottom: '20px',
        },
    },
    companyDescription: {
        color: '#ffffff',
        marginBottom: '15px',
        fontSize: '.9rem',
        fontWeight: 300,
        [theme.breakpoints.down('lg')]: {
            fontSize: '.95rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '.85rem',
            lineHeight: '1.35',
        },
    },
}));

export default useStyles;