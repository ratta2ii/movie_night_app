import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        position: 'fixed',
        backgroundColor: '#0b1120',
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
        backgroundColor: '#17223a',
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
        boxShadow: '0px 0px 5px lightblue',
        '&:focus': {
            outline: 'none !important',
        }, 
        '&:hover': {
            boxShadow: '0px 0px 5px yellow',
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
        boxShadow: '0px 0px 5px lightblue',
        '&:focus': {
            outline: 'none !important',
        }, 
        '&:hover': {
            boxShadow: '0px 0px 5px yellow',
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
        zIndex: 1, // necessary for nav to be below app bar
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
        backgroundColor: '#0b1120',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: '#0b1120',
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
    menuList: {
        backgroundColor: '#1a2644',
        color: '#fee2be',
        paddingLeft: '3px',
        paddingBottom: 0,
    },
    MenuItem: {
        paddingBottom: '25px',
        paddingTop: '25px' 
    },
    ListItemText: {
        marginTop: '10px',
        fontWeight: 'bold'
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
        color: '#0a77ce',
        backgroundColor: '#882ecc',
        marginLeft: 5,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    ShopIcon: {
        color: '#0a77ce',
        backgroundColor: '#38cc2e',
        marginLeft: '5px',
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    FavoriteIcon: {
        color: '#0a77ce',
        backgroundColor: '#c53b2d',
        marginLeft: 5,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    ListAltIcon: {
        color: '#0a77ce',
        backgroundColor: '#f8fb2c',
        marginLeft: 5,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    ListAltIcon2: {
        color: '#0a77ce',
        backgroundColor: '#2ebdcc',
        marginLeft: 5,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    },
    SwapHorizontalCircleIcon: {
        color: '#0a77ce',
        backgroundColor: '#f6961b',
        marginLeft: 5,
        padding: 2,
        fontSize: 25,
        borderRadius: 3,
    }, 
    miniHomeNavTitle: {
        marginBottom: '1rem',
        position: 'absolute',
        bottom: '-8px',
        left: '18px',
        fontSize: '10px',
    }, 
    miniiNavTitle: {
        marginBottom: '1rem',
        position: 'absolute',
        bottom: '-8px',
        left: '5px',
        fontSize: '10px'
    }
}));