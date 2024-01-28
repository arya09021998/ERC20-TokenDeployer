import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import TokenCreatorContract from "../Contracts/TokenCreator.json"

import {  formatEther } from "ethers";


const CreateTokenContext = createContext();

export const CreateTokenProvider = ({ children }) => {

    const [accountAddress, setAccountAddress] = useState("");
    const [tokenName, setTokenName] = useState("PAPA");
    const [tokenSymbol, setTokenSymbol] = useState("PAP");
    const [tokenDecimals, setTokenDecimals] = useState("18");
    const [initialSupply, setInitialSupply] = useState("1000");
    const [maxSupply, setMaxSupply] = useState("10000");

    const [contractInstance, setContractInstance] = useState(null);

    const [blockNumber, setBlockNumber] = useState(0);
    const [balance, setBalance] = useState(0);
    // eslint-disable-next-line
    const [tokenBalance, setTokenBalance] = useState(0);
const [Loading, setLoading] = useState(false);

const [IsSuccess, setIsSuccess] = useState(false);
const [IsFailed, setIsFailed] = useState(false);
const [contractAdd, setcontractAdd] = useState("");

// console.log(TokenCreatorContract.bytecode);
// console.log(TokenCreatorContract.output.abi);

    // console.log("this ether object", ethers);
    async function deployTokenContract() {
  
        let signer = null;
        let provider;

        try {
            if (!window.ethereum) {
                console.error("MetaMask not installed; cannot deploy contract");
                return;
            } else {
                provider = new ethers.BrowserProvider(window.ethereum);

                console.log("after getting provider",provider );
                signer = await provider.getSigner();

                console.log("yes before factory contract");
                const factory = new ethers.ContractFactory(TokenCreatorContract.output.abi, TokenCreatorContract.bytecode, signer);

                console.log("yes before deployement contract");
                setLoading(true);

                const deployedContract = await factory.deploy(
                    tokenName,
                    tokenSymbol,
                    parseInt(tokenDecimals),
                    // ethers.utils.parseUnits(initialSupply, parseInt(tokenDecimals)),
                    // ethers.utils.parseUnits(maxSupply, parseInt(tokenDecimals))
                //    ethers.parseUnits(initialSupply, parseInt(tokenDecimals)),
                //    ethers.parseUnits(maxSupply, parseInt(tokenDecimals))

                parseInt(initialSupply),
                parseInt(maxSupply)
                    // parseUnits(initialSupply, tokenDecimals),
                    // parseUnits(maxSupply, tokenDecimals)
                );

                // await deployedContract.address;
                // await deployedContract.deployed();

              
                   await deployedContract.waitForDeployment();
                const contractAddress = await  deployedContract.getAddress(); // Access the address directly
                console.log("Contract deployed at address:", contractAddress);

                setcontractAdd(contractAddress);
                
                setLoading(false);

                setIsSuccess(true);
                

//                 console.log("Yes ! The contract is deployed at this address: ", deployedContract.address);
                setContractInstance(deployedContract);
    
// console.log(contractInstance);

//                 console.log("Contract deployed:", deployedContract.address);
            }   
        } catch (error) {
            console.error("Error deploying contract:", error);
            setLoading(false);
            setIsFailed(true);
        }
    }




    async function connectMetamask() {
        let signer = null;
        let provider;
        try {

            if (window.ethereum == null) {
                console.log("MetaMask not installed; using read-only defaults")
                provider = ethers.getDefaultProvider();
            } else {
                provider = new ethers.BrowserProvider(window.ethereum)
                signer = await provider.getSigner();
                const connectedAccount = await signer.getAddress();
                setAccountAddress(connectedAccount);
                console.log(connectedAccount);

                // Look up the current block number (i.e. height)
                const _blockNumber = await provider.getBlockNumber();
                setBlockNumber(_blockNumber);
                // 19030518

                // Get the current balance of an account (by address or ENS name)
                const balance = await provider.getBalance("ethers.eth");
                setBalance(ethers.formatEther(balance));
                // 4085267032476673080n

                // Since the balance is in wei, you may wish to display it
                // in ether instead.
                const accountBalanace = formatEther(balance)
                // '4.08526703247667308'
                console.log(accountBalanace);

            }

        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
        }

    }

    useEffect(() => {


        async function connectMeta() {
            let signer = null;
            let provider;
            try {

                if (window.ethereum == null) {
                    console.log("MetaMask not installed; using read-only defaults")
                    provider = ethers.getDefaultProvider();
                } else {
                    provider = new ethers.BrowserProvider(window.ethereum)
                    signer = await provider.getSigner();
                    const connectedAccount = await signer.getAddress();
                    setAccountAddress(connectedAccount);
                    console.log(connectedAccount);

                    // Look up the current block number (i.e. height)
                    const _blockNumber = await provider.getBlockNumber();
                    setBlockNumber(_blockNumber);
                    // 19030518

                    // Get the current balance of an account (by address or ENS name)
                    const balance = await provider.getBalance("ethers.eth");
                    setBalance(ethers.formatEther(balance));
                    // 4085267032476673080n

                    // Since the balance is in wei, you may wish to display it
                    // in ether instead.
                    const accountBalanace = formatEther(balance)
                    // '4.08526703247667308'
                    console.log(accountBalanace);

                }

            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
            }

        }
        connectMeta();
    }, []);



    return (
        <CreateTokenContext.Provider value={{ contractAdd, IsFailed, IsSuccess  , accountAddress, Loading, setAccountAddress, connectMetamask, blockNumber, balance, tokenBalance, setMaxSupply, setInitialSupply, setTokenDecimals, setTokenSymbol, setTokenName, tokenName, tokenSymbol, tokenDecimals, initialSupply, maxSupply, contractInstance, setContractInstance, deployTokenContract}}>
            {children}
        </CreateTokenContext.Provider>
    )
}

export const useCreateToken = () => useContext(CreateTokenContext);
