import React from "react";
import TokenDetails from "./TokenDetails";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { useCreateToken } from "../Contexts/CreateTokenContext";
import { FailedGif, SuccessGif } from "../../Assets/Gifs";


function CreateTokenForm() {


  const { deployTokenContract, Loading, IsFailed, IsSuccess, contractAdd } = useCreateToken(); //accessing the function deployTokenContract from context file

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    deployTokenContract();
  };


  return (
    <form>
      {/* Other form fields go here */}
      <TokenDetails />
      {/* Add other components as needed */}


      {Loading ? (<div className="flex justify-center items-center  ">  <LoaderSpinner /> </div>) : (<button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-full mt-6"
      >
        Create Token
      </button>)}





      {IsSuccess && <div className="text-green-400">
        Contract Deployed Successfully
        <br />
        {/* Display transaction hash when contract is deployed successfully */}
        <span className="font-bold">Contract Address</span> : {contractAdd}
        <br />
        <a
          href={`https://goerli.etherscan.io/address/${contractAdd}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="w-44 bg-blue-400 text-white font-bold"
            onClick={(e) => {
              e.preventDefault(); // Prevents the default behavior (page refresh)
              window.location.href = `https://goerli.etherscan.io/address/${contractAdd}`;
            }}
          >
            View On Etherscan
          </button>
        </a>

        <img src={SuccessGif} alt="transaction success" />
      </div>

      }





      {IsFailed &&
        <div className="text-red-400  font-bold">
          Contract Deployment Failed
          <br />

          <img src={FailedGif} alt="transaction failed" />
        </div>


      }




      {/* {Loading &&  <LoaderSpinner />  } */}


    </form>
  );
}

export default CreateTokenForm;
