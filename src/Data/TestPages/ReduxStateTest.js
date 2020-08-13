
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, getCurrentProduct } from '../../Redux/Reducers/currentProductReducer';
import { addWish, getCurrentWishList } from '../../Redux/Reducers/currentWishListReducer';



export default function ReduxStateTest(props) {


    const dispatch = useDispatch();
    const currentProduct = useSelector(getCurrentProduct);
    const myWishList = useSelector(getCurrentWishList);
    const [productValue, setSelectedProductValue] = useState(currentProduct);
    const [newWishValue, setNewWishValue] = useState();


    const handleAddWish = () => {
        dispatch(addWish(newWishValue));
        setNewWishValue("");
    }


    const handleSelectProduct = () => {
        dispatch(selectProduct(productValue));
        setSelectedProductValue("");
    }


    return (
        <div>
            <h1>I am the productList!!</h1>


            {/* Testing currentProduct slice */}
            <div style={{ marginTop: 20 }}>
                <input
                    aria-label="Current Product"
                    // value={productValue}
                    onChange={e => setSelectedProductValue(e.target.value)}
                />
                <button onClick={handleSelectProduct}>
                    Submit
                </button>
                <h5>I am the currentProduct State: {currentProduct}</h5>
            </div>


            {/* Testing currentWishList slice */}
            <div style={{ marginTop: 20 }}>
                <input
                    aria-label="Wishlist Test"
                    value={newWishValue}
                    onChange={e => setNewWishValue(e.target.value)}
                />

                <button onClick={handleAddWish}>
                    ADD WISH
                </button>

                {/* Printing out the currentWishList */}
                <ul>
                    {myWishList.map(ele => {
                        return <li>{ele}</li>
                    })}
                </ul>
            </div>


        </div>
    )
}