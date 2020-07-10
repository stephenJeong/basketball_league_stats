import React from 'react';
import ReactLoading from 'react-loading';

const LoadingSpinner = () => {
  return (
    <ReactLoading className="loader" type="spin" color="#0047ba" width="15%" />
  );
}

export default LoadingSpinner;
