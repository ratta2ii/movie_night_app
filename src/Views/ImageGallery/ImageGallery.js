import React, { useState } from 'react';
import { useEffect } from 'react';
import useStyles from './ImageGalleryStyles';
import Box from '@material-ui/core/Box';
// import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import Grid from '@material-ui/core/Grid';
import Header from './../../Components/Header/Header';
import Typography from '@material-ui/core/Typography';
import ImageGrid from './../../Components/ImageGrid/ImageGrid';
import Footer from './../../Components/Footer/Footer';


const ImageGallery = (props) => {


    const classes = useStyles();
    const [imageSource, setImageSource] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const handleOpenModal = (event) => {
        setImageSource(event.target.src)
        console.log("I am source", event.target.src);
    }


    const closeModal = () => {
        setImageSource(false);
    }


    return (
        <Box>
            <Header />
            <Box className={classes.root}>
                <ImageGrid handleOpenModal={handleOpenModal} />
            </Box>
            <Box className={classes.imgModal}
                style={{
                    display: (!imageSource) ? 'none' : 'flex',
                }}>
                <Typography
                    className={classes.modalCloseX}
                    onClick={closeModal}>
                    X
                </Typography>
                <img src={imageSource ? imageSource : undefined} alt="test"
                    style={{ maxWidth: '100%', maxHeight: '80%' }} />
            </Box>
            <Footer />
        </Box>
    );
}


ImageGallery.propTypes = {
};


export default ImageGallery;




