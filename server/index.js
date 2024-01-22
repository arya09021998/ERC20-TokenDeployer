const express = require('express');
const { ethers } = require('ethers');
const cors = require('cors');
require('dotenv').config();



const app = express();
const port = 3001;

const ERC20Token = require('./ERC20Token.json'); // Import the compiled contract ABI

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_API_KEY);

// Replace with your JSON wallet object or convert your hex key to BIP32 format
const walletJson = process.env.WALLET_PRIVATE_KEY; // JSON wallet
// const privateKey = "0x8b6f5fefe7cc27cd1ce4f97d46afbd61cb327a518d892987f3"; // Example hex key (not recommended)
const wallet = new ethers.Wallet(walletJson, provider);

app.get('/', (req, res) => {
    res.send('Welcome to the ERC-20 Token Creator!');
});

ethers.Contract.prototype.waitForDeployment = async function () {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds for the transaction to be mined
  while (true) {
    const transactionReceipt = await provider.getTransactionReceipt(this.deployTransaction.hash);
    if (transactionReceipt) {
      if (transactionReceipt.status === 1) {
        console.log("Contract deployed successfully");
        break;
      } else {
        console.error("Contract deployment failed");
        throw new Error("Contract deployment failed");
      }
    }
  }
  return this; // Return the contract address
};

app.post('/createToken', async (req, res) => {
    try {
      const { name, symbol, initialSupply } = req.body;
  
      const factory = new ethers.ContractFactory(
        ERC20Token.abi,
        ERC20Token.bytecode,
        wallet
      );
  
      const contract = await factory.deploy(name, symbol, initialSupply);

      console.log("Yes I here before wait function");

      console.log("Yes I am here after wait function");

      const contractAddress = await contract.waitForDeployment();

      console.log("Yes I am here after wait function CALL ");

      console.log(contractAddress);

      console.log("Yes I am here after Contract address get ");

      res.json({
        success: true,
        contractAddress: contractAddress,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
      });
    }
  });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});