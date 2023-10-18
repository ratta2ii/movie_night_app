import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
    },
    mainGridContainer: {
        marginTop: -25,
        [theme.breakpoints.down('sm')]: {
            marginTop: '25px',
        },
    },
    productListContainer: {
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#28a0ff57',
            padding: '3% 0',
        },
    },
}));

export default useStyles;