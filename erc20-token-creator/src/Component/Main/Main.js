import React from 'react'
import CreateToken from '../CreateToken/CreateToken'
import Navigation from '../Navigation/Navigation'
import Header from '../Header'
import Footer from '../Footer'
import CreateTokenWithMetamask from '../CreateToken/CreateTokenWithMetamask'



const Main = () => {
  return (
    <div className='scroll-smooth bg-blue-100 '>
      <div>
        <Navigation></Navigation>

      </div>

<div>
<Header></Header>
</div>


     <div>
     <CreateToken />

     </div>


      <div id='CreateTokenWithMetamask'>


        <CreateTokenWithMetamask />


      </div>


   <div>
   <Footer></Footer>

   </div>




    </div>
  )
}

export default Main