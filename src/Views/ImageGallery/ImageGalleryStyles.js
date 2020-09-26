import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '70%',
        height: 'auto',
    },
}));


export default useStyles;