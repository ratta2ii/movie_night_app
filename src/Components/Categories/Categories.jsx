import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import "./styles.css";
import { selectCategory } from "../../Redux/Reducers/currentCategoryReducer";

export const Categories = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const handleLoadProducts = (event) => {
        const category = event.currentTarget.id;
        if (category === "imageGallery") {
            history.push(`/images`);
        } else {
            dispatch(selectCategory(category));
            history.push(`/products/${category}`, category);
        }
    };

    return (
        <Grid container justifyContent="center" style={{marginBottom: 125}}>
            <div className="wrap">
                <div
                    className="box one"
                    id="backyardMovies"
                    onClick={(e) => handleLoadProducts(e)}
                >
                    <h1>BACKYARD MOVIES</h1>
                </div>

                <div
                    className="box two"
                    id="largeMovieEvents"
                    onClick={(e) => handleLoadProducts(e)}
                >
                    <h1>LARGE MOVIE EVENTS</h1>
                </div>

                <div
                    className="box three"
                    id="driveInMovies"
                    onClick={(e) => handleLoadProducts(e)}
                >
                    <h1>DRIVE-IN MOVIES</h1>
                </div>

                <div
                    className="box four"
                    id="poolMovies"
                    onClick={(e) => handleLoadProducts(e)}
                >
                    <h1>DIVE-IN MOVIES #poolparty</h1>
                </div>

                <div
                    className="box five"
                    id="concessions"
                    onClick={(e) => handleLoadProducts(e)}
                >
                    <h1>CONCESSIONS</h1>
                </div>

                <div
                    className="box six"
                    id="imageGallery"
                    onClick={(e) => handleLoadProducts(e)}
                >
                    <h1>IMAGE GALLERY</h1>
                </div>
            </div>
        </Grid>
    );
};

export default Categories;










// import { Grid } from "@material-ui/core";
// import { useDispatch } from 'react-redux';
// import React from "react";
// import { useHistory } from "react-router-dom";
// import "./styles.css";
// import { selectCategory } from "../../Redux/Reducers/currentCategoryReducer";

// export const Categories = () => {
//     const history = useHistory();
//     const dispatch = useDispatch();
    
//     const handleLoadProducts = (event) => {
//         const category = event.currentTarget.id;
//         if (category === "imageGallery") {
//             history.push(`/images`);
//         } else {
//             dispatch(selectCategory(category));
//             history.push(`/products/${category}`, category);
//         }
//     };

//     return (
//         <Grid container>
//             <div class="container">
//                 <div class="wrap">
//                     <div
//                         class="box one"
//                         id="backyardMovies"
//                         onClick={(e) => handleLoadProducts(e)}
//                     >
//                         <h1>BACKYARD MOVIES</h1>
//                     </div>

//                     <div
//                         class="box two"
//                         id="largeMovieEvents"
//                         onClick={(e) => handleLoadProducts(e)}
//                     >
//                         <h1>LARGE MOVIE EVENTS</h1>
//                     </div>

//                     <div
//                         class="box three"
//                         id="driveInMovies"
//                         onClick={(e) => handleLoadProducts(e)}
//                     >
//                         <h1>DRIVE-IN MOVIES</h1>
//                     </div>

//                     <div
//                         class="box four"
//                         id="poolMovies"
//                         onClick={(e) => handleLoadProducts(e)}
//                     >
//                         <h1>DIVE-IN MOVIES #poolparty</h1>
//                     </div>

//                     <div
//                         class="box five"
//                         id="concessions"
//                         onClick={(e) => handleLoadProducts(e)}
//                     >
//                         <h1>CONSESSIONS</h1>
//                     </div>

//                     <div
//                         class="box six"
//                         id="imageGallery"
//                         onClick={(e) => handleLoadProducts(e)}
//                     >
//                         <h1>IMAGE GALLERY</h1>
//                     </div>
//                 </div>
//             </div>
//         </Grid>
//     );
// };

// export default Categories;




















// {
//     /* Personal */
// }
// <Grid item xs={12} md={6} lg={4}>
//     <Box
//         id="backyardMovies"
//         className={classes.categoryContainer}
//         onClick={(e) => handleLoadProducts(e)}
//     >
//         BackYard Movies
//   </Box>
// </Grid>;
// {
//     /* Large Event Movies */
// }
// <Grid item xs={12} md={6} lg={4}>
//     <Box
//         id="largeEventMovies"
//         className={classes.categoryContainer}
//         onClick={(e) => handleLoadProducts(e)}
//     >
//         Large Event Movies
//   </Box>
// </Grid>;
// {
//     /* Drive-In Movies */
// }
// <Grid item xs={12} md={6} lg={4}>
//     <Box
//         id="driveInMovies"
//         className={classes.categoryContainer}
//         onClick={(e) => handleLoadProducts(e)}
//     >
//         Drive-In Movies
//   </Box>
// </Grid>;
// {
//     /* Dive-In Movies #poolparty */
// }
// <Grid item xs={12} md={6} lg={4}>
//     <Box
//         id="poolMovies"
//         className={classes.categoryContainer}
//         onClick={(e) => handleLoadProducts(e)}
//     >
//         Dive-In Movies #poolparty
//   </Box>
// </Grid>;
// {
//     /* Concessions */
// }
// <Grid item xs={12} md={6} lg={4}>
//     <Box
//         id="concessions"
//         className={classes.categoryContainer}
//         onClick={(e) => handleLoadProducts(e)}
//     >
//         Concessions
//   </Box>
// </Grid>;
// {
//     /* Image Gallery */
// }
// <Grid item xs={12} md={6} lg={4}>
//     <Box
//         id="imageGallery"
//         className={classes.categoryContainer}
//         onClick={(e) => handleLoadProducts(e)}
//     >
//         Image Gallery
//   </Box>
// </Grid>;
