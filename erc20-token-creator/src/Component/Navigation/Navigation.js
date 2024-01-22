
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { IoMdClose } from "react-icons/io";
import TokenGenerator from '../TokenGenerator/TokenGenerator';
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from './MobileNav.js';
import { FaEthereum } from "react-icons/fa";


const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Main Heading and Logo */}
        <Link to="/" className="text-white flex justify-center gap-2 items-center text-xl font-extrabold">
        <FaEthereum fontSize={40} />
          BChain Tools
        </Link>

        {/* Navigation Menu for Desktop */}
        <ul className="hidden md:flex space-x-4">
          <li>


<TokenGenerator></TokenGenerator>

          </li>



          <li className='hidden'>
            <Link to="/token-generator" className="text-white hover:text-bg-gray-200">
              Token Generator
            </Link>
            <ul className="absolute bg-white p-2 space-y-2">
          
            </ul>
          </li>

          
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
    



          { isMobileMenuOpen ? (<> <IoMdClose  fontSize={25} /></>) : (<> <GiHamburgerMenu  fontSize={25} />  </>)



          }
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
         <MobileNav/>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
