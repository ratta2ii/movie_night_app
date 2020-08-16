
import React from 'react'
import useStyles from './HomeStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AboutUs from './../../Components/AboutUs/AboutUs';
import ProductList from './../../Components/ProductList/ProductList';
import Welcome from '../../Components/Welcome/Welcome';
import Footer from './../../Components/Footer/Footer';
import Grid from '@material-ui/core/Grid';



function Home(props) {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Paper className={classes.mainTitlePaper}>
                <Typography variant='h1' className={classes.mainTitle}>Outdoor Movie Night Equipment Rentals</Typography>
            </Paper>
            <Welcome />
            <AboutUs />



            <ProductList />
            <Footer />
        </Box>
    )
}


export default Home;



// Here is product header if you choose to use this in this component        
// {/* Product Header */}
// <Grid container>
//     {/* Margin left main container */}
//     <Grid item xs={0} sm={1} md={1} xl={2}></Grid>
//     <Grid item xs={12} sm={10} md={10} xl={8}>
//         {/* //? Main container (All content here) */}
//         <Box className={classes.headerContainer} >
//             <Box className={classes.headerOverlayContainer}>
//                 <Typography variant="h3" className={classes.productHeaderTitle}>
//                     PRODUCTS
//                 </Typography>
//                 <Link to="/reservations">
//                     <img src={BookOnlineButton}
//                         alt='book movie theatre rental online now button'
//                         className={classes.bookOnlineButton} />
//                 </Link>

//             </Box>
//         </Box>
//     </Grid>
//     {/* Header right margin */}
//     <Grid item xs={0} sm={1} md={1} xl={2}></Grid>
// </Grid>
