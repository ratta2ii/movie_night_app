import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/sunset.jpeg';
import main_bg_image from './../../Assets/Images/batman.jpg';


export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-85px',
        marginBottom: 0,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, .95)), url('${main_bg_image}')`,
        backgroundPosition: '700px -700px',
        backgroundRepeat: 'no-repeat',
        animation: 'fadeIn ease .25s',
        [theme.breakpoints.down('lg')]: {
            backgroundImage: 'none !important',
        },
    },
    innerRoot: {
        padding: '0 12%',
        // eslint-disable-next-line
        ['@media (max-width:2300px)']: {
            padding: "0 10%",
        },
        // eslint-disable-next-line
        ['@media (max-width:1650px)']: {
            padding: "0 5%",
        },
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
    headerContainer: {
        height: 200,
        position: 'relative',
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: 'cover',
        backgroundPositionY: '-350px',
        margin: '10px 5% 0px',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        borderRadius: 12,
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
        margin: '0 3% 90px',
        paddingTop: '25px',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        [theme.breakpoints.down('lg')]: {
            margin: '0 0 90px'
        },
        [theme.breakpoints.down('md')]: {
            padding: 0,
            margin: 0,
        },
        [theme.breakpoints.down('xs')]: {
            backgroundImage: 'unset',
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
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
            fontWeight: 100,
            margin: 'auto',
            marginTop: 25,
            display: 'block',
            color: '#eaeaea',
            cursor: 'pointer',
            padding: 5,
            borderRadius: 4,
        },

    }
}));

export default useStyles;