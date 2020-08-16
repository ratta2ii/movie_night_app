import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "green",
        fontSize: '5em',
    },
    imageTableContainer: {
        // display: 'flex',
        padding: '20 15 15 15',
        // justifyContent: 'center'
    },
    mainImage: {
        width: 100,
        height: 80,
        padding: 15
    },
    tableText: {
        fontSize: 16,
    },

}));


export default useStyles;