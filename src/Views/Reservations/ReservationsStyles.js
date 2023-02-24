import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 150,
        marginTop: 12,
        animation: 'fadeIn ease .3s',
        [theme.breakpoints.down('lg')]: {
            padding: 0,   
        },[theme.breakpoints.down('md')]: {
            marginTop: 0,   
        },
    },
    textContainer: {
        float: 'right',
        marginLeft: '10px',
        marginRight: '10px',
        padding: '36px 40px 36px 120px',
        [theme.breakpoints.down('lg')]: {
            padding: '36px 20px 36px 150px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '36px 10px 36px 10%',
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#28a0ff57',
            float: 'unset',
            width: '100%',
            margin: '115px 0px 0px 0px',
            padding: '30px 80px 85px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '40px 45px 80px',
        },
    },
    text: {
        color: '#eaeaea',
        marginBottom: 10,
        fontSize: '1.3rem',   
        [theme.breakpoints.down('lg')]: {
            fontSize: '.9rem',   
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '.9rem',   
        },
    },
    thankYouContainer: {
        marginTop: 10,
        marginRight: 10,
        [theme.breakpoints.down('sm')]: {
            float: 'right',
            
        },
    },
    emailResponse: {
        padding: '15px 30px 30px',
        margin: 'auto',
        maxWidth: 600,
        color: 'floralwhite',
        backgroundColor: '#28a0ff57',
        fontSize: '1rem',
        [theme.breakpoints.down('md')]: {
            maxWidth: '550px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '550px',
            margin: '200px auto 60px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            maxWidth: '420px',
            fontSize: '.9rem',
        }
    },
    importantHeader: {
        textAlign: 'center',
        fontSize: '2.1rem',
        color: '#ff6f6f'
    },
    emailResponseText: {
        marginTop: 10,
        marginBottom: 10,
    },
    phoneNumber: {
        color: '#f6961b',
        fontWeight: '600',
        fontSize: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-9px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },
}));

export default useStyles;



