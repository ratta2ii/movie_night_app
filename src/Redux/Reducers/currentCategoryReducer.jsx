import { createSlice } from '@reduxjs/toolkit';

export const currentCategorySlice = createSlice({
    name: 'currentCategory',
    initialState: {
        value: null,
    },
    reducers: {
        selectCategory: (state, action) => {
            console.log("I am the payload in currentCategorySlice: ", action.payload);
            state.value = action.payload;
        },
    },
});

export const { selectCategory } = currentCategorySlice.actions;

export const getCurrentCategory = state => state.currentCategory.value;

export default currentCategorySlice.reducer;