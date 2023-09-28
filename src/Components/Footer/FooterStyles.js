import { makeStyles } from '@material-ui/core/styles';
import footerBgImage from './../../Assets/Images/tron.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, .40)), url('${footerBgImage}')`,
        backgroundSize: 'cover',
        boxShadow: '0 0 7em 4em black inset',
        backgroundPosition: 'center center',
        width: '100%',
        marginTop: 100,
        left: "0",
        bottom: "0",
        [theme.breakpoints.down('xs')]: {
            position: 'relative',
            width: '100%',
            marginTop: 50,
            marginBottom: -200,
        },
    },
    footerContainer: {
        height: 450,
        padding: 0,
        [theme.breakpoints.down('lg')]: {
            height: 250,
        }, 
        [theme.breakpoints.down('md')]: {
            marginTop: 15,
        }, 
        [theme.breakpoints.down('sm')]: {
            margin: '0px auto 0px auto'
        },
        [theme.breakpoints.down('xs')]: {
            backgroundSize: 'auto',
            height: 225,
        },
    },
    footerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000000c4',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    companyLogoBox: {
        width: 85,
        marginRight: '-9px',
        [theme.breakpoints.down('xs')]: {
        },
    },
    companyLogoIcon: {
        width: 77,
        [theme.breakpoints.down('xs')]: {
        },
    },
    hiddenCompanyLogo: {
        width: 175,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    socialIconsContainer: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            width: 220,
            display: 'flex',
            justifyContent: 'space-evenly',
        },
    },
    socialMediaIcons: {
        [theme.breakpoints.down('xs')]: {
            width: 40,
            borderRadius: 5,
        },
    },
}));

export default useStyles;
