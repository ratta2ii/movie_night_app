import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',     
    },
    contentPaperContainer: {
        minHeight: 420,
        position: 'relative',
        padding: '25px 50px 20px 50px',
        marginBottom: 95,
        marginTop: -30,
        [theme.breakpoints.down('md')]: {
            margin: '-20px auto 0px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            padding: 25,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 30,
            padding: 15,
            marginBottom: 50,
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
    receiptContainer: {
        margin: '50px 30px 30px',
        [theme.breakpoints.down('xs')]: {
            margin: '40px 10px 30px',
        },
    },
    productsButtonContainer: {
        marginTop: 10,
        marginBottom: 0,
        padding: '10px 5px',
    },
    checkOutButton: {
        marginRight: 50,
        width: 200,
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        color: 'floralwhite',
        padding: 10,
        '&:hover': {
            border: 0,
            background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
        },
        [theme.breakpoints.down('lg')]: {
            marginRight: '0',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '.7rem',
            width: 150,
        },
    },
    backToProductsButton2: {
        width: 200,
        marginTop: 110,
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#eff0f1',
        '&:hover': {
            backgroundColor: '#dfe1e2',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: 50,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '.7rem',
            width: 150,
        },
    },
    productsButton: {
        backgroundColor: '#eceff1',
        fontSize: 'small',
        
        [theme.breakpoints.down('xs')]: {
            fontSize: '.7rem',
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
        fontFamily: 'monospace',
        marginLeft: 8,
    }
}));


export default useStyles;