// TokenGenerator.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const TokenGenerator = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="relative z-10 inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center cursor-pointer">
        <FontAwesomeIcon className="mr-2" />
        <span className="text-white hover:text-gray-200 font-bold my-2">Token Generator</span>
      </div>

      {isHovered && <DropdownMenu />}
    </div>
  );
};

export default TokenGenerator;
