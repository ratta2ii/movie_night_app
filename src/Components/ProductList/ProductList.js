import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, getCurrentProduct } from './../../Redux/Reducers/currentProductReducer';


export function ProductList(props) {


    const currentProduct = useSelector(getCurrentProduct);
    const dispatch = useDispatch();
    const [productValue, setSelectedProductValue] = useState(currentProduct);

    console.log(props);
    console.log("I am the updated currentProduct: ", currentProduct);


    return (
        <div>
            <h1>I am the productList!!</h1>

            <input
                aria-label="Current Product"
                value={productValue}
                onChange={e => setSelectedProductValue(e.target.value)}
            />
            <button onClick={() => dispatch(selectProduct(productValue))}>
                Submit
            </button>
  
  
            {/* <input
                aria-label="Current Product"
                onChange={e => setSelectedProductValue(e.target.value)}
            />
            <button onClick={() => dispatch(selectProduct(productValue))}>
                Submit
            </button> */}
        </div>
    )
}


