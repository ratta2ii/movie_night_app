import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 1000,
        margin: '20px auto',
        boxShadow: 'inset 0 0 20px #070a14',
        padding: 15,
        backgroundColor: '#0f162947',
        overflow: 'hidden',
        [theme.breakpoints.down('lg')]: {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: { 
            backgroundColor: '#7a97d745',
            padding: 0,
        },
    },
    gridList: {
        width: '70%',
        height: 'auto',
        overflow: 'hidden',
    },
    GridItem: {
        padding: 15,
        height: 227,
        width: '100%',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {  //? md, medium: 960px
            height: 235,
        },
        [theme.breakpoints.down('sm')]: {  //? sm, small: 600px
            height: 'unset',
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {  //? xs, extra-small: 0px
            marginTop: 0,
            height: 320,
        },
        ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
            height: 290,
        },
        ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            height: 250,
        },
    },
    GridItemTall: {
        padding: 15,
        height: 346,
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {  //? md, medium: 960px
            height: 350,
        },
        [theme.breakpoints.down('sm')]: { 
            height: 'unset',
        },
        [theme.breakpoints.down('xs')]: {
            height: 320,
        },
        ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
            height: 290,
        },
        ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            height: 250,
        },
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        '&:hover': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down('sm')]: { 
        },
    }
}));

export default useStyles;



