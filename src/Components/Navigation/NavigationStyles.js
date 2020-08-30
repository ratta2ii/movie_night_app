import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    MenuItem: {
        borderLeft: '5px solid #060a13',
    },
    appBar: {
        position: 'fixed',
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
        boxShadow: '0px 0px 5px #2076c2',
        '&:focus': {
            outline: 'none !important',
        },
        '&:hover': {
            boxShadow: '0px 0px 5px #53a9f4',
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
        boxShadow: '0px 0px 5px #2076c2',
        '&:focus': {
            outline: 'none !important',
        },
        '&:hover': {
            boxShadow: '0px 0px 5px #53a9f4',
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
        width: 10,
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
    contactInfo: {
        color: 'floralwhite'
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
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem'
        },
    },
    companyLogo: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    socialIconsContainer: {
        width: 150,
        display: 'flex',
        justifyContent: 'space-evenly',
        borderRadius: '5px'
    },
    socialMediaIcons: {
        width: 40,
        borderRadius: 5,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    HomeIcon: {
        color: ' #1890ff',
        backgroundColor: '#882ecc',
        marginLeft: 3,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    ShopIcon: {
        color: ' #1890ff',
        backgroundColor: '#38cc2e',
        marginLeft: 3,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    FavoriteIcon: {
        color: ' #1890ff',
        backgroundColor: '#c53b2d',
        marginLeft: 3,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    ListAltIcon: {
        color: ' #1890ff',
        backgroundColor: '#f8fb2c',
        marginLeft: 3,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    ListAltIcon2: {
        color: ' #1890ff',
        backgroundColor: '#2ebdcc',
        marginLeft: 3,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    SwapHorizontalCircleIcon: {
        color: ' #1890ff',
        backgroundColor: '#f6961b',
        marginLeft: 3,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    miniHomeNavTitle: {
        marginBottom: '1rem',
        position: 'absolute',
        bottom: '-10px',
        left: '18px',
        fontSize: '10px',
    },
    miniiNavTitle: {
        marginBottom: '.95rem',
        position: 'absolute',
        bottom: '-8px',
        left: '15px',
        fontSize: '10px'
    }
}));