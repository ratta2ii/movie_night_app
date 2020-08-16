import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 30,
        margin: 'auto',
        maxWidth: 650,
        backgroundColor: '#2196f3',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '550px',
            margin: '190px auto 0%',
            padding: 15,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '350px',
            margin: '170px auto 60px auto',
            padding: 15,
        },
    },
    paper: {
        padding: '20px',
    },
}));


export default useStyles;







