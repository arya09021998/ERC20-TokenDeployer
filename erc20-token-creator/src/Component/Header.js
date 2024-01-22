// Header.js
import React from 'react';
import ContractModal from './ContractModal.js/ContractModal';

const Header = () => {
  return (
    <header className="bg-cover bg-center z-0 relative h-[50vh] max-md:h-[100vh] text-white py-16" style={{ backgroundImage: 'url("https://contenthub-static.crypto.com/cdn-cgi/image/width=1000,quality=75/wp_media/2023/05/WHAT_IS_ERC20_OTP.jpg")' }}>
      <div className="absolute inset-0 flex justify-center items-center backdrop-filter backdrop-blur-xl">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 my-6 leading-tight">Create your ERC20 Token</h1>
          <p className="text-lg text-gray-300 mb-8">
            Create an ERC20 Token in less than a minute with the most trusted Smart Contract Generator for the Ethereum Network.
          </p>
          <p className="text-lg text-gray-300">No login. No setup. No coding required.</p>
       


       <div className='py-10'>
 
       <ContractModal></ContractModal>
        

       </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
