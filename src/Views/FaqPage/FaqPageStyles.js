import { makeStyles } from '@material-ui/core/styles';
import bgImage from './../../Assets/Images/sunset.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
        justifyContent: 'center'
    },
    faqsContainer: {
        borderRadius: '3px',
        margin: 'auto',
        marginBottom: 25,
        maxWidth: 900,
        background: `url('${bgImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1e1821',
        backgroundPositionY: -60,
        backgroundPositionX: -450,
        [theme.breakpoints.down('sm')]: {
            margin: '-20px 5px -40px 5px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 25px -25px 25px',
        },
    },
    faqsContainerOverlay: {
        width: '100%',
        height: '100%',
        padding: 75,
        paddingBottom: 40,
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        [theme.breakpoints.down('xs')]: {
            padding: 15,
        }
    },
    returnHomeLinkBox: {
        marginTop: 50,
        marginBottom: 0,
    },
    returnHomeLink: {
        padding: '10px 20px',
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #104dad 100%)',
        color: 'floralwhite',
    },
    bookOnlineButton: {
        position: 'absolute',
        width: 160,
        bottom: 12,
        right: 15,
        color: 'white',
        backgroundColor: '#ff0100',
        padding: '10px 0 10px 5px',
        [theme.breakpoints.down('sm')]: {
            width: 140,
            fontSize: 'small',
            bottom: 12,
            right: 12,
        },
        [theme.breakpoints.down('xs')]: {
            padding: '7px 0px 7px 4px',
            width: 120,
            fontSize: 'smaller',
            bottom: 8,
            right: 8,
        },
    },
}));

export default useStyles;
