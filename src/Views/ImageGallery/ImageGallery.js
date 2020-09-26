import React from 'react';
import { useEffect } from 'react';
import useStyles from './ImageGalleryStyles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import Header from './../../Components/Header/Header';
import { tileData } from './../../Data/MockData/DataProducts';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';


const ImageGallery = (props) => {

    const classes = useStyles();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Box>
            <Header />

            <Box className={classes.root}>
                <Grid container>


                    {tileData.map((tile) => (
                        <Grid item xs={12} sm={6} style={{height: 300}}>

                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={tile.mainImage}
                        >
                            <img src={tile.img} alt={tile.title} />
                        </a>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );

}


ImageGallery.propTypes = {
};


export default ImageGallery;








// <Box>
// <Header />
// <Box className={classes.root}>
//     <GridList cellHeight={300} spacing={20} className={classes.gridList} cols={12}>
//         {tileData.map((tile) => (
//             <GridListTile key={tile.img} cols={tile.cols || 1}>
//                 <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={tile.mainImage}
//                 >
//                     <img src={tile.img} alt={tile.title} />

//                 </a>
//             </GridListTile>
//         ))}
//     </GridList>
// </Box>
// </Box>