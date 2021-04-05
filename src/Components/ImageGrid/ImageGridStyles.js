/* eslint-disable no-useless-computed-key */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 1000,
        margin: '65px auto',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        padding: '0px 5px 10px',
        backgroundColor: '#17233fc7',
        overflow: 'hidden',
        animation: 'fadeIn ease .3s',
        [theme.breakpoints.down('lg')]: {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: { 
            backgroundColor: '#7a97d745',
            padding: '30px 0 0',
        },
    },
    gridList: {
        width: '70%',
        height: 'auto',
        overflow: 'hidden',
    },
    GridItem: {
        padding: '10px 5px',
        height: 227,
        width: '100%',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {  //? md, medium: 960px
            height: 235,
        },
        [theme.breakpoints.down('sm')]: {  //? sm, small: 600px
            height: 'unset',
            width: '100%',
            padding: '3px 5px',
        },
        [theme.breakpoints.down('xs')]: {  //? xs, extra-small: 0px
            marginTop: 0,
            padding: '0px 15px',
        },
        ['@media (max-width:450px)']: { 
            height: 290,
        },
        ['@media (max-width:400px)']: { 
            height: 250,
        },
    },
    GridItemTall: {
        padding: '10px 5px',
        height: 346,
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {  //? md, medium: 960px
            height: 350,
        },
        [theme.breakpoints.down('sm')]: { 
            height: 'unset',
            padding: '3px 5px',
        },
        [theme.breakpoints.down('xs')]: { 
            padding: '0px 15px',
        },
        ['@media (max-width:450px)']: {
            height: 290,
        },
        ['@media (max-width:400px)']: {
            height: 250,
        },
    },
    imageStyle: {
        width: '100%',
        objectFit: 'contain',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        '&:hover': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down('sm')]: { 
            height: 'unset',
        },
    }, 
    modalContainer: {
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0, 
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.97)',
        zIndex: 5000,
        overflow: 'auto',
        [theme.breakpoints.down('xs')]: { 
            paddingTop: 60,
        },
    }
}));

export default useStyles;



