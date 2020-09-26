import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',     
    },
    contentPaperContainer: {
        minHeight: 420,
        position: 'relative',
        padding: '25px 50px 20px 50px',
        marginBottom: 120,
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
    productsButtonContainer: {
        marginTop: 10,
        marginBottom: 0,
    },
    checkOutButton: {
        width: 200,
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        color: 'floralwhite',
        padding: 10,
    },
    backToProductsButton2: {
        width: 200,
        marginTop: 110,
        marginBottom: 5,
        padding: 10,
        [theme.breakpoints.down('md')]: {
            marginTop: 50,
        },
    },
    backToProducts: {
        color: 'dodgerblue'
    },
    cartTitle: {
        textAlign: 'right'
    },
    cartValue: {
    },
    valueGridItem: {
        textAlign: 'right',
        paddingLeft: 15,
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
    },
    emptyCartText: {
        fontFamily: 'monospace',
    }
}));


export default useStyles;