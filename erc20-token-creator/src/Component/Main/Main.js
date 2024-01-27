import React from 'react'
import CreateToken from '../CreateToken/CreateToken'
import Navigation from '../Navigation/Navigation'
import Header from '../Header'
import Footer from '../Footer'
import CreateTokenWithMetamask from '../CreateToken/CreateTokenWithMetamask'



const Main = () => {
  return (
    <div className='scroll-smooth'>

      {/* <Navigation></Navigation>


<Header></Header>
<CreateToken/>

<Footer></Footer> */}



<CreateTokenWithMetamask/>


    </div>
  )
}

export default Main