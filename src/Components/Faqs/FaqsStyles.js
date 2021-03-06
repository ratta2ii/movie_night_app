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
        color: '#eaeaea',
        padding: '5px 20px',
        borderRadius: 5,
        background: 'linear-gradient(124deg, rgb(38 85 132) 16%, rgb(51 102 153) 56%)', 
    },
    AccordionDetails: {
        backgroundColor: '#fffaf2',
        boxShadow: 'inset 0px 0px 2px black',
        marginBottom: 10,
        padding: '20px 40px !important',
        [theme.breakpoints.down('xs')]: {
            padding: '20px !important',
        },
    },
    details: {
        color: '#000000',
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.9rem',
        },
    }
}));

export default useStyles;


