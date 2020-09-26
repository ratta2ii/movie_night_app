import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
    },
    faqsContainer: {
        borderRadius: '3px',
        marginBottom: 135,
        marginTop: -25,
        [theme.breakpoints.down('sm')]: {
            margin: '0 5% 25px 5%',
            marginBottom: 80,
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 5% 25px 5%',
        },
    },
    faqsContainerOverlay: {
        width: '100%',
        height: '100%',
        backgroundColor: '#cccccce3',
        padding: 25,
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
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
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
