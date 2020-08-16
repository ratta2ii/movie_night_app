
import React from 'react'
import useStyles from './HomeStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AboutUs from './../../Components/AboutUs/AboutUs';
import ProductList from './../../Components/ProductList/ProductList';
import Welcome from '../../Components/Welcome/Welcome';
import Footer from './../../Components/Footer/Footer';


function Home(props) {


    const classes = useStyles();
    

    return (
        <Box className={classes.root}>
            <Paper className={classes.mainTitlePaper}>
                <Typography variant='h1' className={classes.mainTitle}>Outdoor Movie Night Equipment Rentals</Typography> 
            </Paper>
            <Welcome />
            <AboutUs />
            {/* ProductsView comes with the footer component */}
            <ProductList />
            <Footer />
        </Box>
    )
}


export default Home;
