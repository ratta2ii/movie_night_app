import React from 'react';
import { useEffect } from 'react';
import useStyles from './ImageGalleryStyles';
import Box from '@material-ui/core/Box';
import ImageGrid from './../../Components/ImageGrid/ImageGrid';
import Footer from './../../Components/Footer/Footer';
import { Typography } from '@material-ui/core';

const ImageGallery = (props) => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
            <Typography className={classes.carouselInstructions} >
                -- Click an image to view in carousel --
            </Typography>
            <Box className={classes.root}>
                <ImageGrid />
            </Box>
            <Footer />
        </Box>
    );
}

ImageGallery.propTypes = {};

export default ImageGallery;