import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn ease .3s'
    },
    mainGridContainer: {
        maxWidth: 1000,
        overflow: 'hidden',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        [theme.breakpoints.down('lg')]: {
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 850,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 525,
            marginTop: 0,
            marginBottom: 150,  
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '85%',
            marginBottom: 100,
        },
    },
    topGridItem: {
        backgroundColor: 'white',
        padding: '20px 30px',
        borderBottom: '2px solid #efefef',
        color: '#727272',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        fontSize: '.8rem',
        [theme.breakpoints.down('xs')]: {
            padding: '20px 20px',
        },
    },
    backToProducts: {
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            fontSize: 'smaller'
        },
    },
    imageGridContainer: {
        minWidth: '300px',
        borderRight: '2px solid #efefef',
        padding: 50,
        [theme.breakpoints.down('md')]: {
            padding: '25px 25px 10px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '50px 50px 10px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '25px 25px 0px'
        },
    },
    imageStyles: {
        width: '100%',
        maxHeight: 300, 
        objectFit: 'contain',
    },
    descriptionContainer: {
        fontFamily: 'Raleway, sans-serif',
        padding: '25px 40px 25px 35px',
        fontSize: '.8rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '10px',
            paddingLeft: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '25px',
        },
    },
    title: {
        fontFamily: 'Raleway, sans-serif',
        color: '#515151',
        fontWeight: '300',
        paddingTop: '15px',
        margin: '0',
        fontSize: '2rem',
        lineHeight: '1',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.4rem',
        },
    },
    subTitle: {
        margin: '6px 0 15px 0',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '.8rem',
        color: '#515151',
        textTransform: 'uppercase',  
    },
    description: {
        fontFamily: 'Raleway, sans-serif',
        paddingLeft: 0,
        paddingBottom: 8,
    },
    price: {
        fontSize: '1.5rem',
    },
    returnHomeLink: {
        padding: '10px 20px',
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        color: 'floralwhite',
    },
    buttonView: {
        height: 85,
        backgroundColor: '#edf0f8',
        borderTop: '2px solid #efefef',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
    },
    buttonGroup: {
        display: 'flex', 
        justifyContent: 'center',
    },
    wishButton: {
        width: 160,
        height: 40,
        fontSize: 10,
        color: '#ffffff',
        borderRaduis: 0,
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        '&:hover': {
            border: 0,
            background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 9,
            width: 130,
            marginLeft: 12,
        }, 
    },
    reserveButton: {
        width: 160,
        height: 40,
        fontSize: 10,
        color: '#ffffff',
        borderRaduis: 0,
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        backgroundColor: '#ff0100',
        '&:hover': {
            border: 0,
            background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
        },
        [theme.breakpoints.down('xs')]: {
            width: 130,
            fontSize: 9,
        }, 
    }
}));

export default useStyles;







