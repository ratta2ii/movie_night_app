import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/bg12copy.png';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 50,
            marginBottom: -200,
        },
    },
    footerContainer: {
        height: 250,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: 'cover',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        padding: 0,
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
        backgroundColor: '#04060ef5',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#010307b8',
        },
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
