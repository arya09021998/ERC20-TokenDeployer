import React from 'react'
import Main from "./Component/Main/Main.js"
import { CreateTokenProvider } from './Component/Contexts/CreateTokenContext.js'
import {  Routes, Route } from "react-router-dom";

const App = () => {
  return (

<CreateTokenProvider>


<Routes>

<Route path='/' element={<Main></Main>}  />

</Routes>


</CreateTokenProvider>

  )
}

export default App


