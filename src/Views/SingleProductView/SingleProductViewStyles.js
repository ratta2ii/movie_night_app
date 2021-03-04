import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 57,
        left: 25,
        overflowY: 'auto',
        [theme.breakpoints.down('sm')]: {
            position: 'unset',
            marginTop: 200,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 136,
            display: 'unset',
        },
    }

}));

export default useStyles;


