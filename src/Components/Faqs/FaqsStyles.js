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
        fontSize: '1.1rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.1rem',
            wordSpacing: 'unset',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
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
        padding: '20px 30px',
        boxShadow: 'inset 0px 0px 2px black',
        marginBottom: 10,
        [theme.breakpoints.down('md')]: {
            padding: '20px',
        },
    },
    details: {
        color: '#000000',
        fontSize: '1rem',
    }
}));


export default useStyles;


