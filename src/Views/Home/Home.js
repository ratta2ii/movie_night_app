
import React from 'react'
import PropTypes from 'prop-types'
// Styling
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./HomeStyles";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProductsView from './../ProductsView/ProductsView';
import Footer from './../../Components/Footer/Footer';


function Home(props) {
    

    return (
        <Box>
            <Typography variant="h1">Outdoor Movie Night Equipment Rentals</Typography>
            <ProductsView />
            <Footer />
        </Box>
    )
}


export default Home;
