import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 15,
        margin: 'auto',
        maxWidth: 600,
        backgroundColor: '#42a5f566',
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
    },
    emailResponse: {
        padding: 5,
        color: 'floralwhite',
        fontSize: '1.1rem',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.9rem',
        }
    },
    importantHeader: {
        fontSize: '2.1rem',
        marginBottom: 10,
        color: '#ef9a9a'
    }
}));


export default useStyles;







