import { configureStore } from '@reduxjs/toolkit';
import currentProductReducer from './Reducers/currentProductReducer';
import currentCartListReducer from './Reducers/currentCartListReducer';


export default configureStore({
    reducer: {
        currentProduct: currentProductReducer,
        currentCartList: currentCartListReducer,
    },
});

