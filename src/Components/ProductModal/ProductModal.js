import React from 'react';
import useStyles from './ProductModalStyles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import StyledCard from './../StyledCard/StyledCard';
import Box from '@material-ui/core/Box';
// State Management
// import { useSelector } from 'react-redux';
// import { getCurrentProduct } from '../../Redux/Reducers/currentProductReducer';
// import { useDispatch } from 'react-redux';
// import { selectProduct } from '../../Redux/Reducers/currentProductReducer';
// import { addWish, getCurrentWishList } from '../../Redux/Reducers/currentWishListReducer'




function ProductModal(props) {

    const classes = useStyles();
    // useSelector inconjuntion with the "selector returns the state slice"
    // const currentProduct = useSelector(getCurrentProduct);

    //! Remove console statements !\\
    // console.log("ProductModalProps: ", props);
    // console.log("currentProduct: ", currentProduct);
    // console.log("selectProduct: ", selectProduct);
    

    return (
        <Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                {...props}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <Box className={classes.paper}>
                        <Grid container className={classes.modalGridContainer}>
                            {/* Left Margin */}
                            <Grid item sm={2} md={1} lg={2}></Grid>




                            <Grid item xs={12} sm={8} md={10} lg={8} >
                                <StyledCard {...props} />
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}


export default ProductModal;









