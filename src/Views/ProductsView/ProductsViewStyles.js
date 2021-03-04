import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        diplay: 'flex',
        paddingBottom: 125,
    },
    mainGridContainer: {
        marginTop: -25,
        [theme.breakpoints.down('sm')]: {
            marginTop: '25px',
        },
    },
    productListContainer: {
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#7a97d745',
            padding: '12% 0',
        },
    },
}));

export default useStyles;