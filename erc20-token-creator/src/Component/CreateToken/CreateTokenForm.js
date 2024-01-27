import React, { useContext } from "react";
import TokenDetails from "./TokenDetails";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { useCreateToken } from "../Contexts/CreateTokenContext";

function CreateTokenForm() {


const {deployTokenContract} =  useCreateToken(); //accessing the function deployTokenContract from context file


  return (
    <form>
      {/* Other form fields go here */}
      <TokenDetails />
      {/* Add other components as needed */}
      <button
        type="submit"
       onClick={deployTokenContract}
        className="bg-blue-500 text-white py-2 px-4 rounded-full mt-6"
      >
        Create Token
      </button>

      {/* <LoaderSpinner /> */}

    </form>
  );
}

export default CreateTokenForm;
