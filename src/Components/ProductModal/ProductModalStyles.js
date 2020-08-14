import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, .7)',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'unset',
            marginTop: 150, 
        },
        [theme.breakpoints.down('xs')]: {
            // width: '90%',
            margin: '150px auto 0 auto'
        },
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
        width: '100%'
    },
    modalGridContainer: {
        //backgroundColor: '#f2f2f2',
        // boxShadow: theme.shadows[5],
    },
}));

export default useStyles;