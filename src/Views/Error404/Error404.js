import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


function Error404(props) {


    let styles = {
        errorComponent: {
            fontSize: 16,
            fontFamily: 'monospace',
            textAlign: 'center',
            color: 'red',
            marginTop: 170,
        },
    }


    return (
        <Box style={styles.errorComponent}>
            <Typography variant='h4' 
                style={{
                    color: 'red',
                    fontFamily: 'monospace',
                }}>
                The page {props.location.pathname} does not exist!
            </Typography>
            <Typography variant='h6' 
                style={{fontFamily: 'monospace'}}>
                Would you like to return
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: 'dodgerblue',
                    margin: '0 5px',
                    fontFamily: 'monospace',
                }}>
                    HOME
                </Link> 
                instead?
            </Typography>
        </Box>
    );
}


Error404.propTypes = {
    location: PropTypes.object
};


export default Error404;