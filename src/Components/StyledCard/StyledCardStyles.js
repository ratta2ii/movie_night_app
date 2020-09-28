import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainGridContainer: {
        maxWidth: 1000,
        overflow: 'hidden',
        boxShadow: '0 0 10px #314883',
        [theme.breakpoints.down('lg')]: {
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 850,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 600,
            marginBottom: 100,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '85%',
            marginTop: 150,
            marginBottom: 40,
        },
    },
    topGridItem: {
        backgroundColor: 'white',
        padding: '20px 30px',
        borderBottom: '2px solid #efefef',
        color: '#727272',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            padding: '20px 20px',
        },
    },
    backToProducts: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 'smaller'
        },
    },
    imageGridContainer: {
        minWidth: '300px',
        borderRight: '2px solid #efefef',
        padding: 50,
        [theme.breakpoints.down('md')]: {
            padding: '25px 25px 10px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '50px 50px 10px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '25px 25px 0px'
        },
    },
    imageStyles: {
        width: '100%',
    },
    descriptionContainer: {
        fontFamily: 'Raleway, sans-serif',
        padding: '25px 40px 25px 35px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '10px',
            paddingLeft: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '25px',
        },
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
        fontSize: '2.5rem',
        lineHeight: '1',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.4rem',
        },
    },
    subTitle: {
        margin: '6px 0 15px 0',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '12px',
        color: '#515151',

    },
    price: {
        fontSize: '3rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.7rem'
        },
    },
    buttonView: {
        height: 85,
        backgroundColor: '#edf0f8',
        // borderTop: '2px solid #efefef',
        display: 'flex',
        justifyItems: 'center',
    },
    // wishButton: {
    //     width: '47%',
    //     padding: '12px',
    //     margin: '0 2% 0 2%',
    //     backgroundColor: '#03234b', 
    //     color: 'white',
    //     [theme.breakpoints.down('xs')]: {
    //         fontSize: 'x-small'
    //     }, 
    // },
    wishButton: {
        color: '#515151',
        width: '40%',
        margin: '0 2% 0 8%',
        padding: 12,
        backgroundColor: '#ffffff',
        borderRadius: 0,
        border: '1px solid #7e7e7e',
        boxShadow: '0 0 1px',
        '&:hover': {
            color: '#ffffff',
            border: 0,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 'x-small'
        }, 
    },
    // reserveButton: {
    //     width: '47%',
    //     padding: '12px',
    //     backgroundColor: '#e57373',
    //     color: 'white',
    //     [theme.breakpoints.down('xs')]: {
    //         fontSize: 'x-small'
    //     },
    // }
    reserveButton: {
        color: '#515151',
        width: '40%',
        margin: '0 2% 0 1%',
        padding: 12,
        backgroundColor: '#ffffff',
        borderRadius: 0,
        border: '1px solid #7e7e7e',
        boxShadow: '0 0 1px',
        '&:hover': {
            color: '#ffffff',
            border: 0,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 'x-small'
        },
    }
}));


export default useStyles;







