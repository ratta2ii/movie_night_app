import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/stars4.jpg';

const drawerWidth = 200;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    MenuItem: {
        borderLeft: '5px solid #03070f',
        height: 65,
        '&:hover': {
            borderLeft: '5px solid #0f131e',
            backgroundColor: 'rgb(155 202 239 / 5%)',
        },
        [theme.breakpoints.down("xs")]: {
            height: 55,
        }
    },
    appBar: {
        position: 'fixed',
        background: `url('${bg_image}')`,
        backgroundColor: '#03070f',
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
        backgroundColor: '#0e1529',
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
        backgroundColor: '#0e1529',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: '#0e1529',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
            width: 20,
        [theme.breakpoints.up('sm')]: {
            width: 75,
        },
    },
    contactEmail: {
        color: 'floralwhite',
    },
    contactPhone: {
        marginTop: -5,
        color: 'floralwhite',
    },
    menuList: {
        backgroundColor: '#03070f',
        color: '#fee2be',
        padding: '0'
    },
    ListItemText: {
        fontSize: '.8rem',
        marginTop: '4px',
        paddingTop: 3,
        paddingBottom: 3,
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.7rem'
        },
    },
    socialIconsContainer: {
        width: 150,
        height: 40,
        display: 'flex',
        justifyContent: 'space-evenly',
        borderRadius: '5px',
    },
    socialMediaIcons: {
        width: 40,
        marginTop: -1,
        borderRadius: 5,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    HomeIcon: {
        color: '#1890ff',
        marginLeft: 5,
        fontSize: 20,
        borderRadius: 3,
    },
    ShopIcon: {
        color: '#1890ff',
        marginLeft: 5,
        fontSize: 20,
        borderRadius: 3,
    },
    FavoriteIcon: {
        color: '#1890ff',
        marginLeft: 5,
        fontSize: 20,
        borderRadius: 3,
    },
    ListAltIcon: {
        color: '#1890ff',
        marginLeft: 5,
        fontSize: 20,
        borderRadius: 3,
    },
    ListAltIcon2: {
        color: '#1890ff',
        marginLeft: 5,
        fontSize: 20,
        borderRadius: 3,
    },
    SwapHorizontalCircleIcon: {
        color: '#f6961b',
        marginLeft: 5,
        fontSize: 20,
        borderRadius: 3,
    },
    miniHomeNavTitle: {
        marginBottom: '1rem',
        position: 'absolute',
        bottom: '-3px',
        left: '16.5px',
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
    },
    cartItemCount: {
        width: 12,
        height: 12,
        position: "absolute",
        left: 25,
        top: 10,
        backgroundColor: '#1990ff',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: 'black',
        fontSize: '.7rem',
        paddingTop: 4,
        fontWeight: '600',
    }
}));

