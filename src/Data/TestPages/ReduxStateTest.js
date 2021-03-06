import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectProduct,
    getCurrentProduct,
} from "../../Redux/Reducers/currentProductReducer";
import {
    addWish,
    getCurrentCartList,
} from "../../Redux/Reducers/currentCartListReducer";

export default function ReduxStateTest(props) {
    const dispatch = useDispatch();
    const currentProduct = useSelector(getCurrentProduct);
    const mycartList = useSelector(getCurrentCartList);
    const [productValue, setSelectedProductValue] = useState(currentProduct);
    const [newWishValue, setNewWishValue] = useState();

    const handleAddWish = () => {
        dispatch(addWish(newWishValue));
        setNewWishValue("");
    };

    const handleSelectProduct = () => {
        dispatch(selectProduct(productValue));
        setSelectedProductValue("");
    };

    // if (props.currentRouterPath === '/products') {
    //     console.log("Looks like we have the correct router path!!!");
    //     productListHeader =
    //         <Box>
    //             <Box>
    //                 <Typography variant="h3">OUR PRODUCTS</Typography>
    //             </Box>
    //         </Box>;
    // }

    return (
        <div>
            <h1>I am the productList!!</h1>

            {/* Testing currentProduct slice */}
            <div style={{ marginTop: 20 }}>
                <input
                    aria-label="Current Product"
                    // value={productValue}
                    onChange={(e) => setSelectedProductValue(e.target.value)}
                />
                <button onClick={handleSelectProduct}>Submit</button>
                <h5>I am the currentProduct State: {currentProduct}</h5>
            </div>

            {/* Testing currentCartList slice */}
            <div style={{ marginTop: 20 }}>
                <input
                    aria-label="cartList Test"
                    value={newWishValue}
                    onChange={(e) => setNewWishValue(e.target.value)}
                />

                <button onClick={handleAddWish}>ADD CartItem</button>

                {/* Printing out the currentCartList */}
                <ul>
                    {mycartList.map((ele) => {
                        return <li>{ele}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}
