import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px 10px 10px',
        fontSize: '13px',
        boxShadow: '0px 0px 1px #797d8a',
        borderCollapse: 'collapse',
    },
    topGridMain: {
        height: 30,
        backgroundColor: '#e3f2fdb5',
        paddingLeft: 15,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: 45,
        },
    },
    bottomGridMain: {
        height: 30,
        backgroundColor: '#eeeeee',
        paddingLeft: 15,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: 45,
        },
    },
    productImg: {
        width: 70,
        height: 60,
        [theme.breakpoints.down('xs')]: {
            height: 50,
            width: '80%',
            marginLeft: '10%',
            maxHeight: 65,
        },
    },
    title: {
        fontSize: '10px',
        color: '#6b583c',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    productName: {
        marginLeft: 5,
        fontWeight: '500',
        fontSize: '.9rem', 
    },
    price: {
        marginLeft: 5,
        fontWeight: '500',
        fontSize: '.9rem', 
    },
    productId: {
        float: 'right',
        fontWeight: '600',
        marginRight: 5,
        marginTop: 9,
        fontSize: 9,
        [theme.breakpoints.down('xs')]: {
            display: 'none',   
        },
    },
    iconGridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    DeleteForeverIcon: {
        marginLeft: 10,
        color: '#404040',
        fontSize: 30,
        '&:hover': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    hiddenDeleteIcon: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'unset',
            color: '#37474f',
        },
        '&:hover': {
            cursor: 'pointer',
        },
    },
    hiddenIconBox: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            margin: '0 10% 0 10%',
            padding: '5px',
        },
    },
}));


export default useStyles;







