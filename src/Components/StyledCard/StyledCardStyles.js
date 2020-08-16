import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // boxShadow: '0 0 10px #0066ff',
        transition: '.8s',
        '&:hover': {
            // boxShadow: '0 0 40px #0066ff',
            transition: '.8s'
        }
    },
    paper: {
    },
    descriptionContainer: {
        fontFamily: 'Raleway, sans-serif',
        padding: '25px 40px 25px 35px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '10px',
            paddingLeft: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '25px',
        },
    },
    description: {
        fontFamily: 'Raleway, sans-serif',
        paddingLeft: 0,
    },
    title: {
        fontFamily: 'Raleway, sans-serif',
        color: '#515151',
        fontWeight: '300',
        paddingTop: '15px',
        margin: '0',
        fontSize: '35px',
        lineHeight: '1',
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
        },
    },
    subTitle: {
        margin: '5px 0 15px 0',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '12px',
        color: '#515151',

    },
    price: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 25,
            fontWeight: 'bold'
        },
        [theme.breakpoints.down('xs')]: {
            
        },
    },
    imageGridContainer: {
        minWidth: '300px',
        borderRight: '2px solid #efefef',
        padding: 50,
        [theme.breakpoints.down('sm')]: {
            padding: '50px 50px 0px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '25px 25px 0px'
        },
    },
    imageStyles: {
        boxShadow: '0 0 5px grey',
        width: '100%',
    },
    wishButton: {
        width: '44%',
        backgroundColor: '#03234b', 
        color: 'white',
        fontSize: '.8rem',
        margin: '0 4% 0 4%',
        padding: '8px',
        fontWeight: '600',
        borderRadius: 1,
        boxShadow: '0 0 1px #17191b',
        '&:hover': {
            boxShadow: 'inset 0 0 1px #17191b',
            backgroundColor: '#0559c0', 
            fontSize: '0.785rem',
        }
    },
    reserveButton: {
        width: '44%',
        backgroundColor: '#03234b',
        color: 'white',
        fontSize: 13,
        padding: '8px',
        fontWeight: '600',
        borderRadius: 1,
        boxShadow: '0 0 1px #17191b',
        '&:hover': {
            boxShadow: 'inset 0 0 1px #17191b',
            backgroundColor: '#0559c0', 
            fontSize: '0.785rem',
        }
    }
}));


export default useStyles;







