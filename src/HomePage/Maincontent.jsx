import React from 'react'


import background1 from '../assets/background1.jpg'
import background2 from '../assets/background2.jpg'
import background3 from '../assets/background3.jpg'
// import Carousel from './Carousel'





// const slides =[background1,background2,background3],

function Maincontent() {
  return (
    <div>
        <div className='h-96 bg-green mt-2 ml-12 mr-12 rounded-bl-lg rounded-br-lg rounded-tlg'>
            <p className='text-center pt-4 text-3xl '>Welcome to our </p>
            <h1 className='text-center mt-12 text-white font-bold text-7xl '>Virtual Farmer's Market</h1>
            <div className='max-w-lg'>
            {/* <Carousel slides={slides}/> */}
            </div>
      
      
        </div>
<div>
  <p className='text-center mt-10 text-lime-green text-3xl'>Our special features</p>
<h2 className='text-center mt-9 text-dark-green  font-extrabold text-5xl'>Pure Agriculture and Organic Farming</h2>
</div>

    </div>
  )
}

export default Maincontent