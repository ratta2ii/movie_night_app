import { makeStyles } from '@material-ui/core/styles';
//import bg_image from './../../Assets/Images/bg13flip.png';
import bg_image from './../../Assets/Images/spiderman2.jpg';
import bg_image2 from './../../Assets/Images/spiderman.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
        margin: '125px auto',
        fontSize: '3em',
        padding: '15px 3% 75px',
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
        backgroundColor: '#00000000',
    },
    mainGridContainer: {
        background: `url('${bg_image}') no-repeat`,
        backgroundSize: 'cover',
        borderRadius: '3px',
        boxShadow: '0 0 35px 35px black inset',
        [theme.breakpoints.down('xs')]: {
            background: `url('${bg_image2}') no-repeat`,
            backgroundSize: 'inherit',
            backgroundPosition: '-150px 260px',
        },
    },
    leftGridContainer: {
        backgroundColor: '#00000070',
        padding: '50px 0px 50px 70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('lg')]: {
            padding: '100px 0px 100px 90px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '0px 50px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '70px 70px 0px',
            backgroundColor: '#00000040',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '30px 0px',
        },
    },
    rightGridContainer: {
        backgroundColor: '#00000070',
        padding: '150px 100px',
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
            backgroundColor: '#00000040',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '30px 0px',
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
        color: '#eaeaea',
        marginBottom: '15px',
        fontSize: '1.1rem',
        fontWeight: 500,
        [theme.breakpoints.down('lg')]: {
            fontSize: '.9rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            lineHeight: '1.35',
        },
    },
}));

export default useStyles;