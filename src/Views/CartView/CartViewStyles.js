import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
    },
    contentPaperContainer: {
        minHeight: 560,
        position: 'relative',
        padding: '100px 50px 20px 50px',
        marginBottom: 95,
        marginTop: -30,
        animation: 'fadeIn ease .3s',
        [theme.breakpoints.down('xs')]: {
            marginTop: 30,
            padding: '25px 15px',
            marginBottom: 60,
        },
    },
    mainGridContent: {
        [theme.breakpoints.down('sm')]: {
            padding: '0 5%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0',
        },
    },
    backToProductsButtonContainer: {
        position: 'absolute',
        top: 30,
        left: 50,
        [theme.breakpoints.down('xs')]: {
            position: 'unset',
            top: 'unset',
            left:'unset',
        },
    },
    backToProductsButton: {
        width: 190,
        height: 40,
        fontSize: 10,
        borderRaduis: 0,
        backgroundColor: '#eff0f1',
        color: '#000',
        '&:hover': {
            backgroundColor: '#dfe1e2',
        },
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#0f1629',
            color: 'white',
            width: 140,
            marginTop: 20,
            fontSize: 9,
        },
    },
    checkOutButtonContainer: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        [theme.breakpoints.down('xs')]: {
            right: 0,
            bottom: 15,
        },
    },
    checkOutButton: {
        width: 190,
        height: 40,
        fontSize: 10,
        color: '#ffffff',
        borderRaduis: 0,
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        '&:hover': {
            border: 0,
            background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
        },
        [theme.breakpoints.down('lg')]: {
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 9,
            width: 140,
        },
    },
    receiptContainer: {
        margin: '50px 30px 30px',
        [theme.breakpoints.down('xs')]: {
            margin: '40px 10px 30px',
        },
    },
    cartTitle: {
        textAlign: 'right',
        fontSize: '.7rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8rem',
        },
    },
    cartValue: {
        fontSize: '.8rem',
    },
    valueGridItem: {
        textAlign: 'right',
        paddingLeft: 15,
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8rem',
        },
    },
    grandTotalGridItem: {
        textAlign: 'right',
        paddingLeft: 15,
        marginTop: 5,
        paddingTop: 5,
        borderTop: '1px solid black',
    },
    grandTotalTitle: {
        textAlign: 'right',
        marginTop: 5,
        paddingTop: 5,
        fontSize: '.8rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8rem',
        },
    },
    emptyCartText: {
        fontSize: '.9rem',
    }
}));

export default useStyles;