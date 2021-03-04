import { createSlice } from '@reduxjs/toolkit';

export const currentCategorySlice = createSlice({
    name: 'currentCategory',
    initialState: {
        value: null,
    },
    reducers: {
        selectCategory: (state, action) => {
            let newState = Object.assign({state, value: action.payload});
            console.log("NewState: ", newState);
            return newState;
            // state.value = action.payload;
        },
    },
});

export const { selectCategory } = currentCategorySlice.actions;

export const getCurrentCategory = state => state.currentCategory.value;

export default currentCategorySlice.reducer;