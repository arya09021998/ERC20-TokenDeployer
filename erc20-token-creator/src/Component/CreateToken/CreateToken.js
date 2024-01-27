// CreateToken.js
import React, { useState } from "react";
import { useMutation } from "react-query";
import LoaderButton from "../LoaderButton";

const CreateToken = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [initialSupply, setInitialSupply] = useState("");

  const createToken = useMutation(async () => {
    const response = await fetch("https://erc20token.onrender.com/createToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: tokenName,
        symbol: tokenSymbol,
        initialSupply: initialSupply,
      }),
    });

    return response.json();
  });

  const handleCreateToken = async () => {
    await createToken.mutateAsync();
  };









  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">

      

      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-600">ERC-20 Token Creator without Login</h1>
        <label className="block text-2xl mb-4">
          Token Name:
          <input
            type="text"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          Token Symbol:
          <input
            type="text"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          Initial Supply:
          <input
            type="text"
            value={initialSupply}
            onChange={(e) => setInitialSupply(e.target.value)}
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
          />
        </label>




        {/* 

        {createToken.isLoading ? (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue relative"
          >
            <span className="animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Loading...
            </span>
          </button>
        ) : (
          <button
            onClick={handleCreateToken}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue relative"
          >
            Create Token
          </button>
        )}
           */}

        {createToken.isLoading ? (
          <LoaderButton />
        ) : (
          <button
            onClick={handleCreateToken}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue relative"
          >
            Create Token
          </button>

        )}



        {createToken.isSuccess && (
          <div className="mt-4">
            <p className="text-green-700">
              Token created at address: {createToken.data.contractAddress.target}
            </p>
            <button className="mt-2">
              <a
                href={`https://goerli.etherscan.io/address/${createToken.data.contractAddress.target}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Etherscan
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CreateToken;
