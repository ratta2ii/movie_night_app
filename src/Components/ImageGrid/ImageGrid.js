import React from 'react';
import useStyles from './ImageGridStyles';
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
import image13 from './../../Assets/Images/GalleryImages/gallery13.JPG';

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
    image13,
];

const ImageGrid = (props) => {
    const classes = useStyles();
    const { handleOpenModal } = props;

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}
                    className={classes.GridItemTall} >
                    <img src={image4}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="0"
                    />
                </Grid>
                <Grid item xs={12} sm={6}
                    className={classes.GridItemTall} >
                    <img src={image5}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="1"    
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    className={classes.GridItem} >
                    <img src={image1}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="2"    
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    className={classes.GridItem} >
                    <img src={image2}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="3"    
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    className={classes.GridItem} >
                    <img src={image3}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="4"    
                    />
                </Grid>
                <Grid item xs={12} sm={6}
                    className={classes.GridItemTall} >
                    <img src={image9}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="5"    
                    />
                </Grid>
                <Grid item xs={12} sm={6}
                    className={classes.GridItemTall} >
                    <img src={image10}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="6"    
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    className={classes.GridItem} >
                    <img src={image6}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="7"    
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    className={classes.GridItem} >
                    <img src={image7}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="8"    
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    className={classes.GridItem} >
                    <img src={image8}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="9"    
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    className={classes.GridItem} >
                    <img src={image11}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="10"    
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    className={classes.GridItem} >
                    <img src={image12}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="11"    
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    className={classes.GridItem} >
                    <img src={image13}
                        className={classes.imageStyle}
                        alt="Movie screen rental event night"
                        onClick={handleOpenModal} 
                        name="12"    
                    />
                </Grid>
            </Grid>
        </Box>
    );

}

ImageGrid.propTypes = {};

export default ImageGrid;









