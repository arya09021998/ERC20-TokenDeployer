import React from 'react'
import CreateTokenForm from "./CreateTokenForm";

const MainPageTokenCreation = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
      <h1 className="text-2xl font-semibold mb-6">Create Your ERC20 Token</h1>
      <CreateTokenForm />
    </div>
  </div>
  )
}

export default MainPageTokenCreation