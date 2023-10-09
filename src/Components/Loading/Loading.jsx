import React from 'react';

const loadingStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: 'black'
};

const spinnerStyles = {
  border: '4px solid rgba(255, 255, 255, 0.3)',
  borderTop: '4px solid #3498db',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  animation: 'spin 0.5s linear infinite', // Apply the spin animation
  marginBottom: '16px', // Add margin to separate spinner from text
};

const textStyles = {
  color: 'white',
  fontSize: '16px', // Adjust font size as needed
};

export default function Loading() {
  return (
    <div style={loadingStyles}>
      <div style={spinnerStyles}></div>
      <div style={textStyles}>Loading...</div>
    </div>
  );
}
