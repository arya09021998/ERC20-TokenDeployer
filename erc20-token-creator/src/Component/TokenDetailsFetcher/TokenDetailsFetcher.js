import React, { useState } from 'react';

const TokenDetailsFetcher = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenDetails, setTokenDetails] = useState(null);
  const [error, setError] = useState('');

  const fetchTokenDetails = async () => {
    try {
      // const response = await fetch(`https://api.etherscan.io/api?module=token&action=getToken&contractaddress=${tokenAddress}`);
      const response = await fetch(`https://api.goreily.io/api?module=token&action=getToken&contractaddress=${tokenAddress}`);

      console.log(response);
      const data = await response.json();
      console.log(data);
      if (data.status === '1') {
        setTokenDetails(data.result);
        setError('');
      } else {
        setTokenDetails(null);
        setError(data.result);
      }
    } catch (error) {
      console.error('Error fetching token details:', error);
      setTokenDetails(null);
      setError('An error occurred while fetching token details.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">ERC20 Token Details Fetcher</h2>

      <div className="mb-4">
        <label htmlFor="tokenAddress" className="block text-sm font-medium text-gray-600">
          Token Contract Address:
        </label>
        <input
          type="text"
          id="tokenAddress"
          name="tokenAddress"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        onClick={fetchTokenDetails}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full font-bold focus:outline-none focus:shadow-outline-blue"
      >
        Fetch Token Details
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {tokenDetails && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Token Details:</h3>
          <p>
            Token Name: {tokenDetails.tokenName} <br />
            Token Symbol: {tokenDetails.tokenSymbol} <br />
            Total Supply: {tokenDetails.totalSupply} <br />
            Decimals: {tokenDetails.tokenDecimal}
          </p>
        </div>
      )}
    </div>
  );
};

export default TokenDetailsFetcher;
