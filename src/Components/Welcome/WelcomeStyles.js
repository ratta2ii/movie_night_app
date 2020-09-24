import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
        margin: 'auto',
        marginTop: 75,
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
        backgroundColor: '#010307c2',
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
            backgroundColor: '#010307b8',
            padding: '60px 70px 50px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '30px',
        },
    },
    rightGridContainer: {
        backgroundColor: '#010307c2',
        padding: '50px 70px 50px 0px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            padding: '120px 80px 120px 0px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '0px 50px',
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#010307b8',
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
        fontSize: '2.5rem',
        textAlign: 'center',
        paddingBottom: '25px',
        borderBottom: '8px solid #0068ff',
        margin: '0 auto 40px',
        color: '#ffaa00',
        fontWeight: '400',
        letterSpacing: '.005em',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.75rem',
            margin: '10px auto 30px',
            paddingBottom: '20px',
        },
    },
    companyDescription: {
        color: 'floralWhite',
        marginBottom: '15px',
        fontSize: '1.2rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.1rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        },
    },
}));


export default useStyles;