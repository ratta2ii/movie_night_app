import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1150,
        margin: 'auto',
        padding: '0',
        animation: 'fadeIn ease .2s',
    },
    mainProductGridContainer: {
        backgroundColor: '#010308',
        display: 'flex',
        justifyContent: 'center', 
    },
    categoryBackBtn: {
        marginBottom: 30,
        marginLeft: 20,
        color: "#eaeaea",
        [theme.breakpoints.down("xs")]: {
            margin: 10,
        }
    }
}));

export default useStyles;
