import { configureStore } from '@reduxjs/toolkit';
import currentCategoryReducer from './Reducers/currentCategoryReducer';
import currentProductReducer from './Reducers/currentProductReducer';
import currentCartListReducer from './Reducers/currentCartListReducer';

export default configureStore({
    reducer: {
        currentCategory: currentCategoryReducer,
        currentProduct: currentProductReducer,
        currentCartList: currentCartListReducer,
    },
});

