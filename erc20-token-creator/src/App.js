import React from 'react'
import Main from "./Component/Main/Main.js"
import { CreateTokenProvider } from './Component/Contexts/CreateTokenContext.js'


const App = () => {
  return (
<CreateTokenProvider>



<Main></Main>




</CreateTokenProvider>
  )
}

export default App


