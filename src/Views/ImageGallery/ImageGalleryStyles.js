import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%',
        margin: '-65px auto -45px auto',
        [theme.breakpoints.down('md')]: { 
            margin: '-45px auto -40px auto',
        },
        [theme.breakpoints.down('sm')]: { 
            margin: '-25px auto -45px auto',
        },
        [theme.breakpoints.down('xs')]: { 
            marginTop: 10,
            marginBottom: -10,
            padding: '0 25px',
        },
        ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
            padding: 0,
        },
    },
    carouselInstructions: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 30,
        [theme.breakpoints.down('lg')]: { 
            marginTop: -55,
        },
        [theme.breakpoints.down('md')]: { 
            marginBottom: 0,
            marginTop: -25,
        },
        [theme.breakpoints.down('xs')]: { 
            marginTop: 'unset',
            marginBottom: -45
        },
    },
    imgModal: {
        backgroundColor: '#000000f2',
        width: '100vw',
        height: '100vh',
        zIndex: '100',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        top: '0',
        left: '0',
        padding: '10% 2% 5%',
        [theme.breakpoints.down('sm')]: { 
            padding: '10%',
        },
        [theme.breakpoints.down('xs')]: { 
            padding: '5%',
        },
    },
    modalCloseX: {
        position: 'absolute',
        top: 140, 
        right: 70,
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        [theme.breakpoints.down('xs')]: { 
            right: 35,
            top: 132,
        },
    },
}));

export default useStyles;