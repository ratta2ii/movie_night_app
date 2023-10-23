import React from "react";
import { Box } from "@material-ui/core";
import Footer from "./../../Components/Footer/Footer";
import Categories from "../../Components/Categories/Categories";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    categoriesContainer: {
        marginTop: 200,
        margin: '0 20%',
        [theme.breakpoints.down('lg')]: {
            margin: '0 15%',
        },
        [theme.breakpoints.down('md')]: {
            margin: '0 10%',
        },
    },
}));


function CategoriesView(props) {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.categoriesContainer}>
                <Categories />
            </Box>
            <Footer />
        </Box>
    );
}

export default CategoriesView;
