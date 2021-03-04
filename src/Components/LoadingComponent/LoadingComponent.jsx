import React, { useEffect, useState } from "react";
// import 'semantic-ui-css/semantic.min.css'
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingComponent = () => {

    const [loadingInitial, setLoadingInitial] = useState(true);

    // loading indicator
    const sleep = (delay) => {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        })
    }
    
    useEffect(() => {
        setTimeout(() => {
            setLoadingInitial(false);
        }, 1500)
    }, [loadingInitial])

    if (loadingInitial) return <LoadingComponent />

    return (
        <Dimmer active={true} inverted={true}>
            <Loader content="Loading..." />
        </Dimmer>
    );
};

export default LoadingComponent;



//! An example of combining classes and dynamic classes
// import clsx from 'clsx';

// const buttonClassname = clsx({
//   [classes.buttonSuccess]: success,
//   [classes.testClass]: true,
// });

// <Button
//     variant="contained"
//     color="primary"
//     className={buttonClassname}
//     disabled={loading}
//     onClick={handleButtonClick}
// >
//     Accept terms
// </Button>