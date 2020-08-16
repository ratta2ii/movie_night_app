import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(22),
        fontWeight: '500',
        color: 'white',
        letterSpacing: '.03em',
        wordSpacing: '.05em'
    },
    Accordion: {
        marginBottom: 10,
        color: 'white',
        padding: '15px 20px',
        borderRadius: 5,
        background: 'linear-gradient(117deg, rgba(66,165,245,1) 16%, rgba(105,183,247,1) 56%)', 
    },
    AccordionDetails: {
        backgroundColor: '#fdf1e0',
        padding: '30px 50px',
        boxShadow: 'inset 0px 0px 5px black'

    },
    details: {
        color: '#000000',
        fontSize: theme.typography.pxToRem(18),
    }
}));


export default useStyles;

