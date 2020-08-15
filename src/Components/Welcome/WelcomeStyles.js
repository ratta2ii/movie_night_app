import { makeStyles } from '@material-ui/core/styles';
import bg_image from './../../Assets/Images/bg12copy.png';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "",
        diplay: 'flex',
        marginBottom: "100px",
        marginTop: 75,
        fontSize: '3em',
        padding: '0 5%'
    },
    paper: {
        backgroundColor: '#010308',
        // border: '50px solid #010308',
    },
    mainGridContainer: {
        background: `url('${bg_image}') no-repeat`,
        backgroundSize: '100% 100%',
        // backgroundColor: '#2196f326',
        marginBottom: '40px',
        borderRadius: '3px',
        boxShadow: '0px 0px 5px #161f3a',
        padding: 35,
    },
    leftGridContainer: {
        backgroundColor: '#010308',
        padding: 50,
    },
    rightGridContainer: {
        backgroundColor: '#010308',
        padding: 30,
        display: 'flex',
        alignItems: 'center'
    },
    movieNightImage: {
        width: '100%'
    },
    title: {
        width: '100%',
        fontSize: '2.75rem',
        textAlign: 'center',
        padding: '15px',
        borderBottom: '8px solid #0068ff',
        margin: '0 auto 25px',
        color: '#ffaa00',
        fontWeight: '500',
        letterSpacing: '.005em',
        // fontFamily: 'sans-serif',
    },
    companyDescription: {
        color: 'floralWhite',
        marginBottom: '15px',
        fontSize: '1.2rem'

    },
    bookOnlineButton: {
        position: 'absolute',
        width: 120,
        // bottom: 12,
        // right: 14,
    },
}));


export default useStyles;