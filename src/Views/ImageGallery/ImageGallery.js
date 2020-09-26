import React, { useState } from 'react';
import { useEffect } from 'react';
import useStyles from './ImageGalleryStyles';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
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


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [imageSource, setImageSource] = useState(false);


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
                <img src={imageSource} alt="test"
                    style={{ maxWidth: '100%', maxHeight: '80%' }} />
            </Box>
            <Footer />
        </Box>
    );
}


ImageGallery.propTypes = {
};


export default ImageGallery;




// <Box>
//     <Header />
//     <Box className={classes.root}>
//         <ImageGrid handleOpenModal={handleOpenModal} />
//     </Box>

//     <Box className={classes.imageModal}
//         style={{
//             display: (!imageSource) ? 'none' : 'flex',
//         }}>

//     </Box>

// </Box>











// // const ImageGallery = (props) => {

// //     const classes = useStyles();


// //     useEffect(() => {
// //         window.scrollTo(0, 0);
// //     }, []);


// //     const [ imageSource, setImageSource ] = useState(false);

// //     const handleOpenModal = (event) => {
// //         setImageSource(event.target.src)
// //         console.log("I am source", event.target.src);
// //     }

// //     const closeModal = () => {
// //         setImageSource(false);
// //     }

// //     return (
// //         <Box>
// //             <Header />


// //             <Box className={classes.root}>
// //                 <GridList cellHeight={300} spacing={20} className={classes.gridList} cols={12}>
// //                     {tileData.map((tile) => (
// //                         <GridListTile key={tile.img} cols={tile.cols || 1} >

// //                                 <img src={tile.img} alt={tile.title} width="100%" height="auto"
// //                                 onClick={handleFindSource} />


// //                         </GridListTile>
// //                     ))}
// //                 </GridList>
// //             </Box>

// //             <Box 
// //                 style={{
// //                     backgroundColor: '#000000e6',
// //                     width: '100vw',
// //                     height: '100vh',
// //                     display: (!imageSource) ? 'none' : 'flex',
// //                     zIndex: '100',
// //                     position: 'fixed',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     top: '0',
// //                     left: '0',
// //                     padding: '15%',

// //                     }}>
// //                     <Box 
// //                         onClick={closeModal}
// //                         style={{
// //                             position: 'absolute',
// //                             top: 140, right: 70,
// //                             color: 'white',
// //                             fontSize: 30,
// //                         }}
// //                     >
// //                         X
// //                     </Box> 
// //                     <img src={imageSource} alt="test" style={{maxWidth: '100%', maxHeight: '80%'}} />
// //             </Box>

// //         </Box>
// //     );

// // }


// // ImageGallery.propTypes = {
// // };


// // export default ImageGallery;












