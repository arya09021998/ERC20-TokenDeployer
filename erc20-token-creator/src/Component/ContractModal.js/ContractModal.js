import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const ContractModal = () => {

    const [Modal, setModal] = useState(false)


    const showModal = () => {

        if (Modal) {
            setModal(false);
        }
        else {
            setModal(true);
        }

    }



    const codeString = `
    // ERC20Token.sol
   
    // SPDX-License-Identifier: MIT

    pragma solidity ^0.8.0;
    
    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

    contract ERC20Token is ERC20 {

        constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) 
        {
            _mint(msg.sender, initialSupply);
        }
    }
    `;


    return (
        <div>


            <button
                onClick={showModal}
                className='bg-gradient-to-r from-cyan-500 to-blue-500 py-5 px-5   hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  font-bold rounded-xl hover:ring-4 shadow-2xl  hover:shadow-2xl '> Show ERC20 Smart Contract  </button>



            {Modal && <div className='flex justify-center items-center   '>
                <div className='absolute rounded-3xl  flex flex-col  shadow-2xl ring-1 ring-sky-600 top-0 md:h-[70vh] max-sm:h-[80vh]  md:w-[100vh] max-sm:w-[100vw]  bg-white'>
                    <div className='flex justify-end py-4 px-4'>
                        <button
                            onClick={showModal}
                            className='  py-2 px-3 font-bold text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>Close</button>
                    </div>
                    <div className='  text-gray-800 '>
                        <SyntaxHighlighter language='solidity' style={darcula}>
                            {codeString}
                        </SyntaxHighlighter>
                    </div>


<span className='text-black sm:hidden py-10  '>Please use desktop to view full code properly

<br />

Also you can slide the code left and Right
</span>

                </div>
            </div>


            }


        </div>
    )
}

export default ContractModal