import { makeStyles } from '@material-ui/core/styles';
import borderImage from './../../Assets/Images/movie_posters_background.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        margin: 'auto',
        maxWidth: 575,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, .50)), url('${borderImage}')`,
        [theme.breakpoints.down('md')]: {
            maxWidth: '550px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '550px',
            margin: '60px auto 60px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            maxWidth: '420px',
            margin: '12% auto',
            padding: 15,
        },
        ['@media (max-width:475px)']: { // eslint-disable-line no-useless-computed-key
            margin: '5% auto',
        },
    },
    paper: {
        padding: '25px',
        backgroundColor: '#eaeaea',
    },
    phoneNumber: {
        color: '#f6961b',
        fontWeight: '600',
        fontSize: '1rem',
    },
}));


export default useStyles;







