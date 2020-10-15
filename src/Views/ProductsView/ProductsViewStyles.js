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
            backgroundColor: '#3a496ab8',
            padding: '12% 0',
        },
    },
}));


export default useStyles;