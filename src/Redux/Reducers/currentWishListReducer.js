import { createSlice } from '@reduxjs/toolkit';


export const currentWishListSlice = createSlice({
    name: 'currentWishList',
    initialState: {
        value: {},
        productTitles: '',
        cartTotalState: 0,
    },
    reducers: {
        addWish: (state, action) => {
            //* The payload here is an object containing all the wish properties
            const newState = Object.assign({}, state.value, {
                [action.payload.productId]: {
                    ...action.payload
                }
            });
            state.value = newState;
            /*
            I am making a list of titles, in additon to entire objects, that will be mailed in 
            the form to the business owner as products of interests. This simplified having to
            parse the entire object to make input fields when the form rendered.
            */
            if (!state.productTitles.includes(action.payload.title)) {
                state.cartTotalState += parseInt(action.payload.price);
                state.productTitles += `${action.payload.title}, `;
            }
            /* 
            FYI: Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't mutate 
            the state. It uses the Immer library, which detects changes to a "draft state" 
            and produces a brand new immutable state based off those changes 
            */
            /* 
            Fucntionality for working with an array state slice instead of an object. Currently 
            an object to optimize checking for duplicates
            let newWish = action.payload;
            state.value = [ ...state.value.slice(0), newWish ];
            */
        },
        removeWish: (state, action) => {

            var indx = parseInt(action.payload);

            // Remove just the title from the productTitles slice
            var productTitleToRemove = state.value[indx].title;
            var titles = state.productTitles;
            titles = titles.replace(`${productTitleToRemove},`, "");
            state.productTitles = titles;

            // Minus item amount from cartTotal
            var amountToRemove = parseInt(state.value[indx].price);
            state.cartTotalState -= amountToRemove;

            // Remove entire wish/item object
            const newState = Object.assign({}, state.value);
            delete newState[indx];
            state.value = newState;
        },
    },
});


export const { addWish, removeWish } = currentWishListSlice.actions;
export const getCurrentWishList = state => state.currentWishList.value;
export const getProductsForEmail = state => state.currentWishList.productTitles;
export const getCartTotalState = state => state.currentWishList.cartTotalState;


export default currentWishListSlice.reducer;














