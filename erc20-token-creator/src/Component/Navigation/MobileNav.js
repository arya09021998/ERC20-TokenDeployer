// MobileNav.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []); // Empty dependency array ensures that this effect runs once

  return (
    <div>
     <div className="md:hidden absolute z-20 top-16 right-0  odd:bg-white even:bg-slate-50 h-screen w-screen  p-4">
            <ul className="flex flex-col  space-y-8 ">
              
              
              <li>
                <Link to="/token-generator" className="text-blue-500 text-xl font-bold hover:text-blue-700 hover:text-bg-gray-200">
                  Token Generator
                </Link>
              </li>
          
 
              <li>
                <Link to="/token-generator" className="text-blue-500 text-xl font-bold hover:text-blue-700 hover:text-bg-gray-200">
                  Token Generator
                </Link>
              </li>
             
 
              <li>
                <Link to="/token-generator" className="text-blue-500 text-xl font-bold hover:text-blue-700 hover:text-bg-gray-200">
                  Token Generator
                </Link>
              </li>
             
 
              <li>
                <Link to="/token-generator" className="text-blue-500 text-xl font-bold hover:text-blue-700 hover:text-bg-gray-200">
                  Token Generator
                </Link>
              </li>
             
 
              <li>
                <Link to="/token-generator" className="text-blue-500 text-xl font-bold hover:text-blue-700 hover:text-bg-gray-200">
                  Token Generator
                </Link>
              </li>
             
 
              <li>
                <Link to="/token-generator" className="text-blue-500 text-xl font-bold hover:text-blue-700 hover:text-bg-gray-200">
                  Token Generator
                </Link>
              </li>
             
 
              <li>
                <Link to="/token-generator" className="text-blue-500 text-xl font-bold hover:text-blue-700 hover:text-bg-gray-200">
                  Token Generator
                </Link>
              </li>
             
 
              <li>
                <Link to="/token-generator" className="text-blue-500 text-xl font-bold hover:text-blue-700 hover:text-bg-gray-200">
                  Token Generator
                </Link>
              </li>
             
 

            </ul>
          </div>
    </div>
  );
};

export default MobileNav;
