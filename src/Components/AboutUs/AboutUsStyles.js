import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "",
        diplay: 'flex',
        margin: '125px auto',
        fontSize: '3em',
        padding: '15px 3%',
        [theme.breakpoints.down('lg')]: {
            marginTop: '90px',
            marginBottom: '100px',
            padding: '15px 0',
        },
        [theme.breakpoints.down('md')]: {
            marginBottom: '60px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '60px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 15,
        },
    },
    paper: {
        backgroundColor: '#010308',
    },
    mainGridContainer: {
        background: `url('${bg_image}') no-repeat`,
        backgroundSize: 'auto',
        borderRadius: '3px',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: 'auto',
            backgroundPosition: 'center center'
        },
    },
    leftGridContainer: {
        backgroundColor: '#0103079c',
        padding: '50px 0px 50px 70px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            padding: '120px 0px 120px 80px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '0px 50px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '70px 70px 0px',
            backgroundColor: '#010307b8',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '30px 30px 0px',
        },
    },
    rightGridContainer: {
        backgroundColor: '#0103079c',
        padding: '100px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            padding: '60px 80px 60px 70px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '50px 50px 50px 0px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '50px 70px 70px',
            backgroundColor: '#010307b8',
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
        fontSize: '2.5rem',
        fontWeight: '400',
        textAlign: 'center',
        paddingBottom: '25px',
        borderBottom: '8px solid #0068ff',
        margin: '0 auto 40px',
        color: '#ffaa00',
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