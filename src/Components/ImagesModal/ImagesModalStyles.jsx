import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: 1325,
        animation: 'fadeIn ease .4s',
        [theme.breakpoints.down('md')]: { 
            width: 635,
        },
        [theme.breakpoints.down('xs')]: { 
            width: 320,
        },
        
    },
    gridList: {
        height: 'auto',
        overflow: 'hidden',
    },
    GridItem: {
        padding: 5,
        height: 100,
        width: 100,
        overflow: 'hidden',
    },
    GridItemTall: {
        padding: 5,
        height: 100,
        width: 100,
        overflow: 'hidden',
    },
    imageStyle: {
        height: 100,
        width: 100,
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    imgModal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        marginBottom: 50,
        [theme.breakpoints.down('sm')]: { 
            padding: '10%',
        },
        [theme.breakpoints.down('xs')]: { 
            padding: '5%',
        },
    },
    modalCloseX: {
        position: 'absolute',
        top: 35, 
        right: 45,
        color: 'white',
        fontSize: 25,
        fontWeight: '600',
        [theme.breakpoints.down('xs')]: { 
            top: 25, 
            right: 30,
        },
    },
}));

export default useStyles;