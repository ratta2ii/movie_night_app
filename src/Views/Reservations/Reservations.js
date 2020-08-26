import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box';
import ReserveForm from './../../Components/ReserveForm/ReserveForm';


function Reservations() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <Box>
            <ReserveForm />
        </Box>
    );
}


export default Reservations;