import { createSlice } from '@reduxjs/toolkit';


export const currentWishListSlice = createSlice({
    name: 'currentWishList',
    initialState: {
        value: [],
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        addWish: (state, action) => {

            console.log("Made it into wish list reducer");
            console.log("Wishlist action: ", action);
            console.log("State Value: ", state.value);
            
            let newWish = action.payload;
            
            //? Avoid adding the same product twice (Other possible solutions???) ?\\
            // if (state.value.length > 0) {
                //     state.value.forEach(ele => {
                    //         if (ele.productId !== action.payload.productId) {
                        //             newWish = action.payload;
                        //         }
                        //     })
                        // }
                        
                        state.value = [
                            ...state.value.slice(0),
                            newWish
                        ];
                        
            console.log("State Value Ending: ", state.value);
            // This is an alternative way to do this
            // const newWishList = [ ...state.value, action.payload ]; 
            // state.value = newWishList;
        },
        removeWish: (state, action) => {
            console.log("Payload in removeWish: ", action.payload);
            // This will needed to tested once data is added
            // let wishList = state.value;
            // const productIdToRemove = action.payload;
            // for (let i in wishList) {
            //     if (wishList[i].id === productIdToRemove) {
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














