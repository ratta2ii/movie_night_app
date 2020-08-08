import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../features/counter/counterSlice';
import currentProductReducer from './Reducers/currentProductReducer';


export default configureStore({
    reducer: {
        counter: counterReducer,
        currentProduct: currentProductReducer
    },
});

