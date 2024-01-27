// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenCreator is ERC20 {
    uint256 private _maxSupply;

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialSupply,
        uint256 maxSupply
    ) ERC20(name, symbol) {
        require(initialSupply <= maxSupply, "Initial supply must be less than or equal to max supply");
        _mint(msg.sender, initialSupply * (10**decimals));
        _maxSupply = maxSupply * (10**decimals);
    }

    function getMaxSupply() external view returns (uint256) {
        return _maxSupply;
    }
}
