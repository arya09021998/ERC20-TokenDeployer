import React from "react";
import { useCreateToken } from "../Contexts/CreateTokenContext";

const TokenDetails = () => {

    const { setMaxSupply, setInitialSupply, setTokenDecimals, setTokenSymbol, setTokenName, tokenName, tokenSymbol, tokenDecimals, initialSupply, maxSupply  } = useCreateToken();

    


  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Token Details</h2>

      <div className="mb-3">
        <label htmlFor="tokenName" className="block text-sm font-medium text-gray-600">
          Token Name
        </label>
        <input
          type="text"
          id="tokenName"
          name="tokenName"
          value={tokenName}
          placeholder="PAPA"
          required
          onChange={(e) => setTokenName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tokenSymbol" className="block text-sm font-medium text-gray-600">
          Token Symbol
        </label>
        <input
          type="text"
          id="tokenSymbol"
          name="tokenSymbol"
          placeholder="PAP"
          value={tokenSymbol}
          required
          onChange={(e) => setTokenSymbol(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tokenDecimals" className="block text-sm font-medium text-gray-600">
          Token Decimals
        </label>
        <input
          type="number"
          id="tokenDecimals"
          name="tokenDecimals"
          placeholder="18"
          value={tokenDecimals}
          required
          min="1"
          max="18"
          step="1"
          pattern="^[0-9]+$"
          title="Only numbers allowed"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          onChange={(e) => setTokenDecimals(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="initialSupply" className="block text-sm font-medium text-gray-600">
          Initial Supply
        </label>
        <input
          type="number"
          id="initialSupply"
          name="initialSupply"
          placeholder="1000"
          value={initialSupply}
          required
          min="5"
          max="100000000000000000000000"
          step="1"
          pattern="^[0-9]+$"
          title="Only numbers allowed"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          onChange={(e) => setInitialSupply(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="maxSupply" className="block text-sm font-medium text-gray-600">
          Max Supply
        </label>
        <input
          type="number"
          id="maxSupply"
          name="maxSupply"
          value={maxSupply}
          required
          min="10"
          max="100000000000000000000000"
          step="1"
          pattern="^[0-9]+$"
          title="Only numbers allowed"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="1000000000"
          onChange={(e) => setMaxSupply(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TokenDetails;
