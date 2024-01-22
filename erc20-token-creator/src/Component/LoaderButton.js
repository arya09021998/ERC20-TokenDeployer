// LoaderButton.js
import React from 'react';

import { Hourglass } from 'react-loader-spinner';

const LoaderButton = () => {
  return (
    <button
      className="bg-blue-100 text-white py-2 px-4 rounded focus:outline-none"
    >
    
      <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
      />
 
    </button>
  );
};

export default LoaderButton;
