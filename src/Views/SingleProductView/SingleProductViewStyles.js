import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 0,
        [theme.breakpoints.down('sm')]: {
            marginTop: 200,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 136,
            display: 'unset',
        },
    }

}));


export default useStyles;


