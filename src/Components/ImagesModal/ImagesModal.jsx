import React, { useEffect, useState } from 'react';
import useStyles from './ImagesModalStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import image1 from './../../Assets/Images/GalleryImages/gallery1.jpg';
import image2 from './../../Assets/Images/GalleryImages/gallery2.jpg';
import image3 from './../../Assets/Images/GalleryImages/gallery3.jpg';
import image4 from './../../Assets/Images/GalleryImages/gallery4.jpg';
import image5 from './../../Assets/Images/GalleryImages/gallery5.jpg';
import image6 from './../../Assets/Images/GalleryImages/gallery6.jpg';
import image7 from './../../Assets/Images/GalleryImages/gallery7.jpg';
import image8 from './../../Assets/Images/GalleryImages/gallery8.jpg';
import image9 from './../../Assets/Images/GalleryImages/gallery9.png';
import image10 from './../../Assets/Images/GalleryImages/gallery10.JPG';
import image11 from './../../Assets/Images/GalleryImages/gallery11.JPG';
import image12 from './../../Assets/Images/GalleryImages/gallery12.JPG';
import { Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const imagesArray = [
    image4,
    image5, 
    image1,
    image2,
    image3,
    image9,
    image10,
    image6,
    image7,
    image8,
    image11,
    image12,
];

const ImagesModal = (props) => {
    const classes = useStyles();
    const { closeModal } = props;
    const [imageSource, setImageSource] = useState(imagesArray[0]);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        if(props.currentImgIndex) {
            setImageSource(imagesArray[props.currentImgIndex]); 
            setCurrentImgIndex(props.currentImgIndex);
        }
    }, [props.currentImgIndex])

    const handleOpenModal = (event) => {
        let imgIndex = parseInt(event.target.name);
        setCurrentImgIndex(imgIndex)
        setImageSource(imagesArray[imgIndex]); 
    }
    
    const handleNextImage = () => {
        if (currentImgIndex < 11) {
            setImageSource(imagesArray[currentImgIndex + 1]);
            setCurrentImgIndex(currentImgIndex + 1);
        }
        else {
            return false;
        }
    }
    
    const handlePreviousImage = () => {
        if (currentImgIndex > 0) {
            setImageSource(imagesArray[currentImgIndex - 1]);
            setCurrentImgIndex(currentImgIndex - 1);
        }
        else return;
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.imgModal} >
                <Typography
                    className={classes.modalCloseX}
                    onClick={closeModal}>
                    X
                </Typography>
                <Typography
                    className={classes.modalRightArrow}
                    style={{color: 'white', marginRight: 50}}
                    onClick={handlePreviousImage}>
                    <ChevronLeftIcon fontSize="large" />
                </Typography>
                {/* //! Main Image */}
                <img src={imageSource ? imageSource : undefined} alt="test"
                    style={{ maxWidth: 600, minWidth: 320 }} />
                <Typography
                    className={classes.modalRightArrow}
                    style={{color: 'white', marginLeft: 50}}
                    onClick={handleNextImage}>
                    <ChevronRightIcon fontSize="large" />
                </Typography>
            </Box>
            <Grid container >
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItemTall} >
                    <img src={image4}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        style={{opacity: (currentImgIndex  === 0) ? 1: .4, transition: 'transform .2s'}}
                        name="0"
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItemTall} >
                    <img src={image5}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal}
                        style={{opacity: (currentImgIndex  === 1) ? 1: .4}} 
                        name="1"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItem} >
                    <img src={image1}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal}
                        style={{opacity: (currentImgIndex  === 2) ? 1: .4}} 
                        name="2"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItem} >
                    <img src={image2}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        style={{opacity: (currentImgIndex  === 3) ? 1: .4}}
                        name="3"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItem} >
                    <img src={image3}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        style={{opacity: (currentImgIndex  === 4) ? 1: .4}}
                        name="4"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItemTall} >
                    <img src={image9}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal}
                        style={{opacity: (currentImgIndex  === 5) ? 1: .4}} 
                        name="5"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItemTall} >
                    <img src={image10}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal}
                        style={{opacity: (currentImgIndex  === 6) ? 1: .4}} 
                        name="6"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItem} >
                    <img src={image6}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        style={{opacity: (currentImgIndex  === 7) ? 1: .4}}
                        name="7"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItem} >
                    <img src={image7}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal}
                        style={{opacity: (currentImgIndex  === 8) ? 1: .4}} 
                        name="8"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItem} >
                    <img src={image8}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal}
                        style={{opacity: (currentImgIndex  === 9) ? 1: .4}} 
                        name="9"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItem} >
                    <img src={image11}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal}
                        style={{opacity: (currentImgIndex  === 10) ? 1: .4}} 
                        name="10"    
                    />
                </Grid>
                <Grid item xs={4} sm={2} lg={1}
                    className={classes.GridItem} >
                    <img src={image12}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal}
                        style={{opacity: (currentImgIndex  === 11) ? 1: .4}} 
                        name="11"    
                    />
                </Grid>
            </Grid>
        </Box>
    );

}

ImagesModal.propTypes = {};

export default ImagesModal;