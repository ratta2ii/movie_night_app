import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "green",
        fontSize: '5em',
    },
    imageTableContainer: {
        padding: '20 15 15 15',
        textAlign: 'center',
        borderBottom: '1px solid #a5a5a5'
    },
    mainImage: {
        width: 115,
        height: 90,
        padding: 15,
        [theme.breakpoints.down('xs')]: {
            width: 90,  
        },
    },
    tableText: {
        fontSize: 22,
        fontWeight: 300,
        textAlign: 'left',
        paddingLeft: 30,
        borderBottom: '1px solid #a5a5a5',
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            paddingLeft: 0,
        },
    },
    buttonContainer: {
        textAlign: 'center',
        borderBottom: '1px solid #a5a5a5',
        [theme.breakpoints.down('xs')]: {
            paddingRight: 8,
        },
    }
}));


export default useStyles;