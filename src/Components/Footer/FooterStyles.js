import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 110,
    },
    footerContainer: {
        height: 250,
        backgroundColor: '#0c1120',
        boxShadow: '0px 0px 5px #161f3a',
        padding: 0,
        [theme.breakpoints.down('md')]: {
            marginTop: 15,
        }, 
        [theme.breakpoints.down('sm')]: {
            margin: '0px auto 0px auto'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 0,
        },
    },
    footerOverlayContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0103078c',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    producFooterTitle: {
        fontSize: '6rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#00000024',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    bookOnlineButton: {
        width: 140,
    },
}));


export default useStyles;
