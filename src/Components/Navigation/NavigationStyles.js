import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import bg_image from './../../Assets/Images/stars4.jpg';


const drawerWidth = 230;


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    MenuItem: {
        borderLeft: '5px solid #060a13',
        height: 65,
        '&:hover': {
            borderLeft: '5px solid #0f131e',
            backgroundColor: 'rgb(155 202 239 / 5%)',
        },
    },
    appBar: {
        position: 'fixed',
        background: `url('${bg_image}')`,
        // this goes with stars4
        // backgroundSize: '100% 300px',
       // backgroundSize: 'cover',
       //  backgroundPositionY: '-475px',
        backgroundColor: '#060a13',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    toolBar: {
        height: '115px',
        borderBottom: '10px solid red',
        padding: 15
    },
    toolBarContent: {
        width: '100%',
        backgroundColor: '#111b35',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px 20px',
    },
    toggleDesktopMenuBtn: {
        width: '40px',
        height: '40px',
        margin: '0 35px 0 13px',
        borderRadius: '50%',
        boxShadow: '0px 0px 1px #6e6e6e',
        '&:focus': {
            outline: 'none !important',
        },
        '&:hover': {
            boxShadow: '0px 0px 3px #53a9f4',
        },
        '&:active': {
            boxShadow: '0px 0px 0px',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    toggleMobileMenuBtn: {
        width: '40px',
        height: '40px',
        margin: '0 30px 0 8px',
        borderRadius: '50%',
        boxShadow: '0px 0px 1px #6e6e6e',
        '&:focus': {
            outline: 'none !important',
        },
        '&:hover': {
            boxShadow: '0px 0px 3px #53a9f4',
        },
        '&:active': {
            boxShadow: '0px 0px 0px',
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    desktopDrawer: {
        width: drawerWidth,
        marginTop: '200px',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        // necessary for nav to be below app bar
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    mobileDrawer: {
        width: 300,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerOpen: {
        width: drawerWidth,
        backgroundColor: '#111b35',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: '#111b35',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    contactEmail: {
        color: 'floralwhite',
        fontSize: '.5rem',
    },
    contactPhone: {
        marginTop: -5,
        color: 'floralwhite',
        fontSize: '.5rem',
    },
    menuList: {
        backgroundColor: '#060a13',
        color: '#fee2be',
        padding: '0'
    },
    ListItemText: {
        fontSize: '.9rem',
        marginTop: '4px',
        paddingTop: 3,
        paddingBottom: 3,
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem'
        },
    },
    companyLogoBox: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '100px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    companyLogo: {
        width: 85,
        marginTop: 8,
    },
    socialIconsContainer: {
        width: 150,
        display: 'flex',
        justifyContent: 'space-evenly',
        borderRadius: '5px',
        paddingTop: 5,
    },
    socialMediaIcons: {
        width: 40,
        borderRadius: 5,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    HomeIcon: {
        color: '#1890ff',
        // backgroundColor: '#882ecc',
        marginLeft: 3,
        // padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    ShopIcon: {
        color: '#1890ff',
        // backgroundColor: '#38cc2e',
        marginLeft: 3,
        // padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    FavoriteIcon: {
        color: '#1890ff',
        // backgroundColor: '#c53b2d',
        marginLeft: 3,
        // padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    ListAltIcon: {
        color: '#1890ff',
        // backgroundColor: '#f8fb2c',
        marginLeft: 3,
        // padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    ListAltIcon2: {
        color: '#1890ff',
        // backgroundColor: '#2ebdcc',
        marginLeft: 3,
        // padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    SwapHorizontalCircleIcon: {
        color: '#f6961b',
        // backgroundColor: '#f6961b',
        marginLeft: 3,
        // padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    miniHomeNavTitle: {
        marginBottom: '1rem',
        position: 'absolute',
        bottom: '-3px',
        left: '18px',
        fontSize: '10px',
    },
    miniiNavTitle: {
        marginBottom: '.95rem',
        position: 'absolute',
        bottom: '-4px',
        left: '15px',
        fontSize: '10px'
    },
    Divider: {
        backgroundColor: '#171d2e',
        [theme.breakpoints.down('sm')]: {
            opacity: '0',
        },
    }
}));


export const StyledDivider = styled(Divider)`
    background-color: white;
    margin: 0,
    padding: 0,

    // & .MuiButton-label {
    //     color: #fff;
    // }
`;
