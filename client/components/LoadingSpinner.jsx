import React from 'react';
import ReactLoading from 'react-loading';

const LoadingSpinner = () => {
  return (
    <ReactLoading className="loader" type="bars" color="#e5e7e9" width="5%" />
  );
}

export default LoadingSpinner;
