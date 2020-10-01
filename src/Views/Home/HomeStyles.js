import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/sunset.jpeg';


export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-85px', 
        marginBottom: 0
    },
    mainTitlePaper: {
        backgroundColor: '#2196f3',
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
            background: '#2196f3',
        }, 
    },
    mainTitle: {
        textAlign: 'center',
        padding: 15,
        fontSize: '1.1rem',
        color: 'floralwhite',
        fontWeight: '500',
        letterSpacing: 'revert',
        wordSpacing: '.175em',
        [theme.breakpoints.down('sm')]: {
            wordSpacing: 'unset',
        }, 
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        }, 
    },
    headerContainer: {
        height: 215,
        position: 'relative',
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: 'cover',
        backgroundPositionY: '-350px',
        margin: '10px 3% 40px',
        borderRadius: '3px',
        boxShadow: 'inset 0px 0px 10px #000000a6',
        [theme.breakpoints.down('lg')]: {
            margin: '10px 0 40px',
            backgroundPositionY: '-300px',
        },
        [theme.breakpoints.down('md')]: {
            margin: '50px auto 40px auto',
            backgroundPositionY: '-250px',
        },
        [theme.breakpoints.down('sm')]: {
            height: 170,
            margin: '20px auto 40px auto',
            backgroundPositionY: '-165px',
        },
        [theme.breakpoints.down('xs')]: {
            height: 150,
            backgroundPositionY: '-50px',
            marginTop: -29,
            padding: '0',
            marginBottom: 50,
        },
    },
    productListContainer: {
        backgroundColor: '#2e406c80',
        padding: '5% 0',
    },
    // bookOnlineButton: {
    //     position: 'absolute',
    //     width: 160,
    //     bottom: 12,
    //     right: 15,
    //     color: 'white',
    //     backgroundColor: '#ff0100',
    //     padding: '10px 0 10px 5px',
    //     [theme.breakpoints.down('sm')]: {
    //         width: 140,
    //         fontSize: 'small',
    //         bottom: 12,
    //         right: 12,
    //     },
    //     [theme.breakpoints.down('xs')]: {
    //         width: 120,
    //         fontSize: 'smaller',
    //         bottom: 8,
    //         right: 8,
    //     },
    // },
    contactUsButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        color: 'white',
        backgroundColor: '#ff0100',
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
}));


export default useStyles;