import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 1150,
        margin: '20px auto',
        boxShadow: 'inset 0 0 20px #070a14',
        padding: 15,
        backgroundColor: '#0f162947',
        border: '75px solid #17233fc7',
        overflow: 'hidden',
        [theme.breakpoints.down('lg')]: {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: { 
            backgroundColor: '#7a97d745',
            display: 'flex',
            justifyContents: 'center',
            alignItems: 'center',
            padding: '60px 30px 40px 30px',
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
        //height: 293,
        width: '100%',
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
        padding: 15,
        height: 346,
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {  //? md, medium: 960px
            height: 390,
        },
        [theme.breakpoints.down('sm')]: {  //? sm, small: 600px
            height: 300,
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
        width: '100%',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        '&:hover': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down('xs')]: {  //? sm, small: 600px
            width: '100%'
        },
    }
}));

export default useStyles;





// import { makeStyles } from '@material-ui/core/styles';

// export const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: 1150,
//         padding: '50px 50px 30px 30px',
//         margin: '50px 0',
//         backgroundColor: '#0e1529',
//         boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
//         animation: 'fadeIn ease .2s',
//         [theme.breakpoints.down('lg')]: {
//             width: '85%',
//         },
//         [theme.breakpoints.down('xs')]: { 
//             backgroundColor: '#7a97d745',
//             display: 'flex',
//             justifyContents: 'center',
//             alignItems: 'center',
//             padding: '60px 30px 40px 30px',
//         },
//     },
//     gridList: {
//         width: '70%',
//         height: 'auto',
//     },
//     GridItem: {
//         marginTop: -23,
//         height: 400,
//         overflow: 'hidden',
//         [theme.breakpoints.down('md')]: {  //? md, medium: 960px
//             height: 265,
//         },
//         [theme.breakpoints.down('sm')]: {  //? sm, small: 600px
//             height: 'unset',
//             maxHeight: 300,
//             width: '100%'
//         },
//         [theme.breakpoints.down('xs')]: {  //? xs, extra-small: 0px
//             marginTop: -20,
//             height: 320,
//         },
//         ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
//             height: 250,
//         },
//     },
//     GridItemTall: {
//         marginTop: -23,
//         height: 485,
//         overflow: 'hidden',
//         [theme.breakpoints.down('md')]: {  //? md, medium: 960px
//             height: 390,
//         },
//         [theme.breakpoints.down('sm')]: {  //? sm, small: 600px
//             height: 300,
//         },
//         [theme.breakpoints.down('xs')]: {  //? xs, extra-small: 0px
//             height: 320,
//         },
//         ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
//             height: 250,
//         },
//     },
//     imageStyle: {
//         height: '100%',
//         '&:hover': {
//             cursor: 'pointer',
//         },
//         [theme.breakpoints.down('xs')]: {  //? sm, small: 600px
//             width: '100%'
//         },
//     }
// }));

// export default useStyles;