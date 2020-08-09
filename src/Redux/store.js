import { configureStore } from '@reduxjs/toolkit';
import currentProductReducer from './Reducers/currentProductReducer';
import currentWishListReducer from './Reducers/currentWishListReducer';


export default configureStore({
    reducer: {
        currentProduct: currentProductReducer,
        currentWishList: currentWishListReducer,
    },
});

