import { createSlice } from '@reduxjs/toolkit';


export const currentWishListSlice = createSlice({
    name: 'currentWishList',
    initialState: {
        value: {},
    },
    reducers: {
        addWish: (state, action) => {
            //! Remove console statements
            // console.log("Made it into addWish reducer");
            //* The payload here is an object containing all the wish properties
            const newState = Object.assign({}, state.value, {
                [action.payload.productId]: {
                    ...action.payload
                }
            });
            //? Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't mutate the state. It uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes 
            state.value = newState;
            //! Fucntionality for working with an array state slice instead of an object !\\
            // let newWish = action.payload;
            // state.value = [ ...state.value.slice(0), newWish ];
        },
        removeWish: (state, action) => {
            //! Remove console statement !\\
            // console.log("Payload in removeWish reducer: ", action.payload);
            var indx = parseInt(action.payload);
            const newState = Object.assign({}, state.value);
            delete newState[indx];
            state.value = newState;
        },
    },
});


export const { addWish, removeWish } = currentWishListSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCurrentWishList = state => state.currentWishList.value;


export default currentWishListSlice.reducer;














