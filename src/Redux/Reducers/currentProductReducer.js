import { createSlice } from '@reduxjs/toolkit';


export const currentProductSlice = createSlice({
    name: 'currentProduct',
    initialState: {
        value: null,
    },
    reducers: {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        selectProduct: (state, action) => {
            // console.log("I am the payload: ", action.payload);
            state.value = action.payload;
        },
    },
});


export const { selectProduct } = currentProductSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCurrentProduct = state => state.currentProduct.value;


export default currentProductSlice.reducer;