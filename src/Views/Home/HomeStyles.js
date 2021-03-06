import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/sunset.jpeg';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-85px', 
        marginBottom: 0,
        animation: 'fadeIn ease .2s',
    },
    innerRoot: {
        padding: '0 8%',
        [theme.breakpoints.down('md')]: {
            padding: '0',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0 5%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0',
        },
    },
    mainTitlePaper: {
        backgroundColor: '#1e88e5',
        zIndex: '1',
        width: '40%',
        textAlign: 'center',
        textTransform: 'capitalize',
        margin: '0 auto',
        opacity: '.75',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        [theme.breakpoints.down('md')]: {
            width: '50%',
        }, 
        [theme.breakpoints.down('sm')]: {
            width: '65%',
            marginTop: '200px',
        }, 
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
        }, 
    },
    mainTitle: {
        textAlign: 'center',
        padding: 15,
        fontSize: '1.1rem',
        color: 'floralwhite',
        letterSpacing: 'revert',
        wordSpacing: '.175em',
        fontFamily: 'math, serif',
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            wordSpacing: 'unset',
        }, 
        [theme.breakpoints.down('xs')]: {
            fontSize: '.9rem',
        }, 
    },
    headerContainer: {
        height: 175,
        position: 'relative',
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: 'cover',
        backgroundPositionY: '-350px',
        margin: '10px 3% 0px',
        borderRadius: '3px',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        [theme.breakpoints.down('lg')]: {
            margin: '10px 0 0px',
            backgroundPositionY: '-300px',
        },
        [theme.breakpoints.down('md')]: {
            margin: '50px auto 120px auto',
            backgroundPositionY: '-250px',
        },
        [theme.breakpoints.down('sm')]: {
            height: 170,
            margin: '20px auto 0px auto',
            backgroundPositionY: '-165px',
        },
        [theme.breakpoints.down('xs')]: {
            height: 150,
            backgroundPositionY: '-50px',
            marginTop: -29,
            padding: '0',
            marginBottom: 45,
        },
    },
    CategoriesContainer: {
        backgroundColor: '#17233fc7',
        margin: '0 3% 45px',
        padding: '75px 0px 50px',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        [theme.breakpoints.down('lg')]: {
            margin: '0 0 25px'
        },
        [theme.breakpoints.down('md')]: {
            padding: 0,
            margin: 0,
        },
        [theme.breakpoints.down('xs')]: {
        },
    },
    contactUsButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        color: 'white',
        backgroundColor: 'red',
        padding: '10px 20px',
        fontSize: '.8rem',
        [theme.breakpoints.down('sm')]: {
            padding: '7px 0px 7px 4px',
            width: 120,
            bottom: 16,
            right: 16,
        },
        [theme.breakpoints.down('xs')]: {
            bottom: 16,
            right: 16,
        },
    },
    scrollTopButton: {
        fontSize: 15,
        fontWeight: 100,
        margin: 'auto',
        marginTop: 65,
        display: 'block',
        color: '#eaeaea',
        cursor: 'pointer',
        padding: 5,
        borderRadius: 4,
    }
}));

export default useStyles;