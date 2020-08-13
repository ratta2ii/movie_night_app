import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // boxShadow: '0 0 10px #0066ff',
        transition: '.8s',
        '&:hover': {
            // boxShadow: '0 0 40px #0066ff',
            transition: '.8s'
        }
    },
    paper: {

    },
    descriptionContainer: {
        fontFamily: 'Raleway, sans-serif',
        // borderTop: '1px solid lightgrey',
        padding: '25px 40px 25px 35px',

    },
    description: {
        fontFamily: 'Raleway, sans-serif',
        paddingLeft: 0,
    },
    title: {
        fontFamily: 'Raleway, sans-serif',
        color: '#515151',
        fontWeight: '300',
        paddingTop: '15px',
        margin: '0',
        fontSize: '35px',
        lineHeight: '1',
    },
    subTitle: {
        margin: '5px 0 15px 0',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '12px',
        color: '#515151',

    },
    imageGridContainer: {
        minWidth: '300px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderTop: '1px solid lightgrey',
        borderRight: '2px solid #efefef',
        padding: 50,
    },
    imageStyles: {
        boxShadow: '0 0 5px grey',
        width: '100%',
    },
    wishButton: {
        width: '35%',
        backgroundColor: '#81be8e',
        
        color: 'white',
        fontSize: 13,
        margin: '0 2% 0 14%',
        padding: '8px',
        fontWeight: '600',
        borderRadius: 1
    },
    reserveButton: {
        width: '35%',
        backgroundColor: '#1f497c',
        color: 'white',
        fontSize: 13,
        padding: '8px',
        fontWeight: '600',
        borderRadius: 1
    }
}));


export default useStyles;












// export const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex'
//     },
//     tr: {
//         // background: "#f1f1f1",
//         '&:hover': {
//             // background: "#f00",
//         },
//     },
//     appBar: {
//         position: 'fixed',
//         backgroundColor: '#0b1120',
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         })
//     },
//     toggleDesktopMenuBtn: {
//         width: '40px',
//         height: '40px',
//         margin: '0 35px 0 13px',
//         borderRadius: '50%',
//         boxShadow: '0px 0px 5px lightblue',
//         '&:focus': {
//             outline: 'none !important',
//         },
//         '&:hover': {
//             boxShadow: '0px 0px 5px yellow',
//         },
//         '&:active': {
//             boxShadow: '0px 0px 0px',
//         },
//         [theme.breakpoints.down('sm')]: {
//             display: 'none',
//         },
//     },
// }));