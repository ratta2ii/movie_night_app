import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal: {
        overflowY: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, .7)',
    },
    paper: {
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            padding: '75% 5% 50px 5%',
        },
    },
    modalGridContainer: {
        //backgroundColor: '#f2f2f2',
        // boxShadow: theme.shadows[5],
    },
}));

export default useStyles;