import React from 'react';
import { useEffect } from 'react';
import useStyles from './ImageGalleryStyles';
import Box from '@material-ui/core/Box';
import Header from './../../Components/Header/Header';
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
            <Header />
            <Typography
                style={{
                    textAlign: 'center',
                    color: 'white',
                    marginBottom: 50,
                }} >
                Click any image to view in carousel
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












// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import useStyles from './ImageGalleryStyles';
// import Box from '@material-ui/core/Box';
// import Header from './../../Components/Header/Header';
// import Typography from '@material-ui/core/Typography';
// import ImageGrid from './../../Components/ImageGrid/ImageGrid';
// import Footer from './../../Components/Footer/Footer';
// import { imagesArray } from './../../Components/ImageGrid/ImageGrid';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// const ImageGallery = (props) => {

//     const classes = useStyles();
//     const [imageSource, setImageSource] = useState(false);
//     const [currentImgIndex, setCurrentImgIndex] = useState();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const handleOpenModal = (event) => {
//         let imgIndex = parseInt(event.target.name);
//         setCurrentImgIndex(imgIndex)
//         setImageSource(imagesArray[imgIndex]);
        
//         console.log("imgName: ", imagesArray[currentImgIndex]);
//         console.log("imgIndex: ", currentImgIndex);
//         console.log("I am source", event.target.name);
//     }
    
//     const closeModal = () => {
//         setImageSource(false);
//     }
    
//     const handleNextImage = () => {
//         if (currentImgIndex < 12) {
//             setImageSource(imagesArray[currentImgIndex + 1]);
//             setCurrentImgIndex(currentImgIndex + 1);
//         }
//         else {
//             return false;
//         }
//     }
    
//     const handlePreviousImage = () => {
//         if (currentImgIndex > 0) {
//             setImageSource(imagesArray[currentImgIndex - 1]);
//             setCurrentImgIndex(currentImgIndex - 1);
//         }
//         else return;
//     }

//     return (
//         <Box>
//             <Header />
//             <Box className={classes.root}>
//                 <ImageGrid handleOpenModal={handleOpenModal} />
//             </Box>
//             <Box className={classes.imgModal}
//                 style={{
//                     display: (!imageSource) ? 'none' : 'flex',
//                 }}>
//                 <Typography
//                     className={classes.modalCloseX}
//                     onClick={closeModal}>
//                     X
//                 </Typography>
//                 <Typography
//                     className={classes.modalRightArrow}
//                     style={{color: 'white', fontSize: 15, marginRight: 100}}
//                     onClick={handlePreviousImage}>
//                     <ChevronLeftIcon fontSize="large" />
//                 </Typography>
//                 <img src={imageSource ? imageSource : undefined} alt="test"
//                     style={{ maxWidth: '100%', maxHeight: '80%' }} />
//                 <Typography
//                     className={classes.modalRightArrow}
//                     style={{color: 'white', fontSize: 15, marginLeft: 100}}
//                     onClick={handleNextImage}>
//                     <ChevronRightIcon fontSize="large" />
//                 </Typography>
//             </Box>
//             <Footer />
//         </Box>
//     );
// }

// ImageGallery.propTypes = {};

// export default ImageGallery;




