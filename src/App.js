import React from 'react';
// This is here to explore the flow of redux in this template
import { ProductList } from './Components/ProductList/ProductList';



function App(props) {

    console.log(props);
    return (
        <div>
            <h1>Hello at least there is a homepage!!!</h1>
            {/* <Counter /> */}
            <ProductList />
            
        </div>
    );
}

export default App;
