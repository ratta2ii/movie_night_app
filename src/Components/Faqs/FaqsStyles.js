import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontWeight: '500',
        color: 'white',
        letterSpacing: '.02em',
        wordSpacing: '.05em',
        fontSize: '1.4rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.25rem',
            wordSpacing: 'unset',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.15rem',
            marginLeft: -15,
        },
    },
    Accordion: {
        marginBottom: 10,
        color: 'white',
        padding: '5px 20px',
        borderRadius: 5,
        background: 'linear-gradient(117deg, rgba(66,165,245,1) 16%, rgba(105,183,247,1) 56%)', 
    },
    AccordionDetails: {
        backgroundColor: '#fffaf2',
        padding: '30px 50px',
        boxShadow: 'inset 0px 0px 5px black',
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            padding: '20px',
        },
    },
    details: {
        color: '#000000',
        fontSize: '1.3rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        },
    }
}));


export default useStyles;

