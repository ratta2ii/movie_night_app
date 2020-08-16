import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-85px'
    },
    mainTitlePaper: {
        backgroundColor: '#88979a',
        zIndex: '1',
        width: '40%',
        textAlign: 'center',
        margin: '0 auto',
        opacity: '.75',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        [theme.breakpoints.down('md')]: {
            width: '50%',
            background: 'purple',
        }, 
        [theme.breakpoints.down('sm')]: {
            width: '65%',
            marginTop: '200px',
            background: 'red',
        }, 
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            background: '#2196f3',
        }, 
    },
    mainTitle: {
        textAlign: 'center',
        padding: 15,
        fontSize: '1.3rem',
        color: 'floralwhite',
        fontWeight: '500',
        //textTransform: 'uppercase',
        letterSpacing: 'revert',
        wordSpacing: '.175em',
        [theme.breakpoints.down('sm')]: {
            wordSpacing: 'unset',
            fontSize: '1.2',
        }, 
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        }, 
    }
}));


export default useStyles;