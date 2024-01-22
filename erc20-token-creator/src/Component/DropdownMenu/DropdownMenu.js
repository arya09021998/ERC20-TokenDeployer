// DropdownMenu.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs,  faBook } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = () => {
  return (
    <div className="absolute  right-6 bg-white/50 h-[55vh] text-2xl w-[15vw] p-2  border cursor-pointer rounded-md border-gray-300">
      {/* <div className="flex items-center">
        <FontAwesomeIcon icon={faCogs} className="mr-2" />
        <span>Discover Token Generator</span>
      </div> */}
      <div className="flex items-center py-4 hover:text-white hover:bg-blue-300 rounded-xl ">
        <FontAwesomeIcon icon={faCogs} className="mr-2" />
        <span>Ethereum</span>
      </div>
      <div className="flex items-center py-4 hover:text-white hover:bg-blue-300 rounded-xl ">
        <FontAwesomeIcon icon={faCogs} className="mr-2" />
        <span>BNB Chain</span>
      </div>
      <div className="flex items-center py-4 hover:text-white hover:bg-blue-300 rounded-xl ">
        <FontAwesomeIcon icon={faCogs} className="mr-2" />
        <span>Polygon</span>
      </div>
      <div className="flex items-center py-4 hover:text-white hover:bg-blue-300 rounded-xl ">
        <FontAwesomeIcon icon={faCogs} className="mr-2" />
        <span>Avalanche</span>
      </div>
      <div className="flex items-center py-4 hover:text-white hover:bg-blue-300 rounded-xl ">
        <FontAwesomeIcon icon={faCogs} className="mr-2" />
        <span>Tutorial</span>
      </div>
      <div className="flex items-center py-4 hover:text-white hover:bg-blue-300 rounded-xl ">
        <FontAwesomeIcon icon={faBook} className="mr-2" />
        <span>Documentation</span>
      </div>
    </div>
  );
};

export default DropdownMenu;
