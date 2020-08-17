import { makeStyles } from '@material-ui/core/styles';
import header_bg_image from './../../Assets/Images/film4-upside.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "",
        diplay: 'flex'
    },
    headerContainer: {
        height: 115,
        marginTop: -85,
        background: `url('${header_bg_image}') no-repeat`,
        backgroundSize: '100%',
        marginBottom: '120px',
        boxShadow: 'inset 0px 0px 10px #aeaeae',
        [theme.breakpoints.down('sm')]: {
            margin: '116px auto 50px auto'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 100
        },
    },
    headerOverlayContainer: {
        height: '100%',
        width: '100%',
         // light matching color
        // backgroundColor: '#e0e0e0b8',
        backgroundColor: '#c6c6c65e',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    headerTitle: {
        fontSize: '6rem',
        fontFamily: '"Roboto", "Helvetica", "Arial"',
        fontWeight: 800,
        lineHeight: 1.167,
        letterSpacing: '0.02em',
        color: '#00000024',
        opacity: '.7',
        [theme.breakpoints.down('md')]: {
            fontSize: '5.3rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4.3rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.3rem',
        },
    },
    faqsContainer: {
        padding: 25,
        borderRadius: '3px',
        boxShadow: 'inset 0px 0px 10px #aeaeae',
        background: 'linear-gradient(90deg, rgb(133 148 150) 0%, rgb(127 142 145) 40%, rgb(148 162 163) 100%)',
        marginBottom: 35
    },
    returnHomeLinkBox: {
        marginBottom: 150
    },
    returnHomeLink: {
        padding: '10px 20px',
        background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
        color: 'floralwhite',
    },
    
    bookOnlineButton: {
    position: 'absolute',
    width: 140,
    bottom: 12,
    right: 15,

    [theme.breakpoints.down('md')]: {
        width: 100,
    },
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.down('xs')]: {
    },
},
}));


export default useStyles;
















// import { makeStyles } from '@material-ui/core/styles';
// import header_bg_image from './../../Assets/Images/film4copy.jpg';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: "",
//         // diplay: 'flex'
//     },
    // headerContainer: {
    //     height: 120,
    //     marginTop: -85,
    //     background: `url('${header_bg_image}') no-repeat`,
    //     backgroundSize: '100%',
    //     marginBottom: '120px',
    //     boxShadow: 'inset 0px 0px 10px #aeaeae',
    //     [theme.breakpoints.down('sm')]: {
    //         margin: '175px auto 50px auto'
    //     },
    //     [theme.breakpoints.down('xs')]: {
    //         width: '100%',
    //         marginTop: 150,
    //         height: 100
    //     },
    // },
//     overlayContainer: {
//         height: '100%',
//         width: '100%',
//         backgroundColor: '#e0e0e0b8',
//         borderRadius: '3px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'relative',
//     },
//     headerTitle: {
//         fontSize: '7rem',
//         fontFamily: '"Roboto", "Helvetica", "Arial"',
//         fontWeight: 800,
//         lineHeight: 1.167,
//         letterSpacing: '0.02em',
//         color: '#00000024',
//     },
//     faqsContainer: {
//         marginBottom: 1150,
//         padding: 25,
//         borderRadius: '3px',
//         boxShadow: 'inset 0px 0px 10px #aeaeae',
//         background: 'linear-gradient(90deg, #dfe3ec 0%, rgb(169 169 169) 40%, rgb(155 158 159) 100%',
//     },
// }));


// export default useStyles;



