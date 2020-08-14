import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 320,
        margin: '0 auto'
    },
    CardMedia: {
        height: "220px",
    },
    title: {
        textAlign: 'center'
    },
    action: {
        margin: "0 0 0 10px",
        display: 'flex',
    },
    addWishText: {
        margin: "0 auto 0 25px",
        fontSize: '.7rem'
    },
    CardContent: {
        height: '50px'
    },
});


export default useStyles;