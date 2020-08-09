import { createSlice } from '@reduxjs/toolkit';


export const currentWishListSlice = createSlice({
    name: 'currentWishList',
    initialState: {
        value: ["WishList Index One"],
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        addWish: (state, action) => {

            const newWish = action.payload;
            state.value = [
                ...state.value.slice(0),
                newWish
            ];

            // This is an alternative way to do this
            // const newWishList = [ ...state.value, action.payload ]; 
            // state.value = newWishList;
        },
        removeWish: (state, action) => {
            // console.log("Payload in removeWish: ", action.payload);
            // // This will needed to tested once data is added
            // const wishList = state.value;
            // const productToRemove = action.payload;
            // for (let i in wishList) {
            //     if (wishList[i].id === productToRemove.id) {
            //         wishList.splice(i);
            //     }
            // }
            // state.value = wishList;
        },
    },
});


export const { addWish, removeWish } = currentWishListSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCurrentWishList = state => state.currentWishList.value;


export default currentWishListSlice.reducer;














