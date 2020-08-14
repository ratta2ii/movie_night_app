import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 30,
        margin: 'auto',
        maxWidth: 650,
        backgroundColor: 'cornflowerblue',
        [theme.breakpoints.down('xs')]: {
            margin: '150px auto 0 auto',
            padding: 15,
            margin: 20
        },
    },
    paper: {
        padding: '20px',
        [theme.breakpoints.down('xs')]: {
            marginTop: 100,
        }
    },
}));


export default useStyles;







