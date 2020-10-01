import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1250,
        padding: '50px 50px 30px 30px',
        [theme.breakpoints.down('lg')]: {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: { 
            backgroundColor: '#2e406c80',
            display: 'flex',
            justifyContents: 'center',
            alignItems: 'center',
            padding: '60px 30px 40px 30px',
        },
    },
    gridList: {
        width: '70%',
        height: 'auto',
    },
    GridItem: {
        marginTop: -23,
        height: 400,
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {  //? md, medium: 960px
            height: 265,
        },
        [theme.breakpoints.down('sm')]: {  //? sm, small: 600px
            height: 'unset',
            maxHeight: 300,
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {  //? xs, extra-small: 0px
            marginTop: -20,
            height: 320,
        },
        ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
            height: 250,
        },
    },
    GridItemTall: {
        marginTop: -23,
        height: 485,
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {  //? md, medium: 960px
            height: 390,
        },
        [theme.breakpoints.down('sm')]: {  //? sm, small: 600px
            height: 300,
           // marginTop: -20,
        },
        [theme.breakpoints.down('xs')]: {  //? xs, extra-small: 0px
            height: 320,
        },
        ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
            height: 250,
        },
    },
    imageStyle: {
        height: '100%',
        '&:hover': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down('xs')]: {  //? sm, small: 600px
            width: '100%'
        },
    }
}));


export default useStyles;