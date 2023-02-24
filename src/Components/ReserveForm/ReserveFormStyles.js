import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 15,
        margin: 'auto',
        maxWidth: 575,
        backgroundColor: '#28a0ff57',
        [theme.breakpoints.down('md')]: {
            maxWidth: '550px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '550px',
            margin: '60px auto 60px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            maxWidth: '420px',
            margin: '12% auto',
        },
        ['@media (max-width:475px)']: { // eslint-disable-line no-useless-computed-key
            margin: '5% auto',
        },
    },
    paper: {
        padding: '25px',
        backgroundColor: '#eaeaea',
    },
    phoneNumber: {
        color: '#f6961b',
        fontWeight: '600',
        fontSize: '1rem',
    },
}));


export default useStyles;







