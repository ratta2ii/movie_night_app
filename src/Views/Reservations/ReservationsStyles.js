import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 12,
        [theme.breakpoints.down('md')]: {
            marginTop: 0,   
        },
    },
    textContainer: {
        backgroundColor: '#42a5f566',
        width: '280px',
        float: 'right',
        marginLeft: '10px',
        marginRight: '10px',
        padding: '20px 20px 20px 25px',
        [theme.breakpoints.down('sm')]: {
            float: 'unset',
            width: '100%',
            margin: '115px 0px 0px 0px',
            padding: '30px 80px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '30px 45px',
        },
    },
    text: {
        color: 'floralwhite',
        fontWeight: '200',
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
    phoneNumber: {
        color: '#f6961b',
        fontWeight: '600',
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: 28,
        },
    },
}));


export default useStyles;