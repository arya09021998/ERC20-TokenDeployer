import React from 'react';
import MainPageTokenCreation from './MainPageTokenCreation';
import { useCreateToken } from '../Contexts/CreateTokenContext';
import TokenDetailsFetcher from '../TokenDetailsFetcher/TokenDetailsFetcher';
import { GrCopy } from "react-icons/gr";


const CreateTokenWithMetamask = () => {
  const { accountAddress, connectMetamask, blockNumber, balance, tokenBalance } = useCreateToken();


  const truncatedAddress = accountAddress
    ? `${accountAddress.substring(0, 6)}.....${accountAddress.substring(accountAddress.length - 6)}`
    : "Please connect wallet ";


const copyaddress = () => { 
  navigator.clipboard.writeText(accountAddress);
}



  return (
    <div className="container mx-auto bg-blue-100 p-6">
      
      <TokenDetailsFetcher></TokenDetailsFetcher>
      <div className="mt-8 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Account Information</h2>

        <div className="mb-4">
          <span className="font-semibold">Address:</span> {truncatedAddress } <span onClick={copyaddress} className='text-3xl cursor-pointer hover:text-gray-600 '> <GrCopy />  </span>
        </div>

        <div className="mb-4">
          <span className="font-semibold">Block Number:</span> {blockNumber}
        </div>

        <div className="mb-4">
          <span className="font-semibold">Account Balance:</span> {balance}
        </div>

        <div className="mb-4">
          <span className="font-semibold">Token Balance:</span> {tokenBalance}
        </div>

        <button
          onClick={connectMetamask}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full font-bold focus:outline-none focus:shadow-outline-green"
        >
          Connect Metamask
        </button>
      </div>

      <MainPageTokenCreation />

    </div>
  );
};

export default CreateTokenWithMetamask;
