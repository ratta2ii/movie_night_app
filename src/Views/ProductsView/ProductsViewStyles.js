import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
    },
    mainGridContainer: {
        marginTop: -25,
        [theme.breakpoints.down('sm')]: {
            marginTop: '5px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '25px',
        },
    },
    productListContainer: {
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#2e406c80',
            padding: '12% 0',
        },
    },
}));


export default useStyles;