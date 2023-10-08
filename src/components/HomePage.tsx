import React from 'react'
import NavBar from './NavBar'

const HomePage = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-start bg-cyan-800'>
        <NavBar/>
       <div className="h-[100%] flex  items-center justify-center px-16 box-border bg-[#1C1B34] ">
       <div className="h-[45%] w-[50%] flex flex-col items-start justify-evenly  ">
            <h1 className="text-6xl text-[#5855ad] fobg-[#7674b6]nt-Raleway font-extrabold  "> Predict and Win</h1>
            <p className="text-lg text-white text-left w-[93%] ">users can predict the exchange rate of
various crypto currencies at a specific time and win prizes
based on closeness to the actual prize.</p>


<button className='p-2 box-border text-white text-[16px] bg-[#7674b6] rounded-xl'> Start Predicting </button>

        </div>

        <div className="h-[50%] w-[50%] flex flex-col items-center justify-center ">
            <img src="/test.jpg" alt="" className="object-cover w-[70%] h-[100%]" />
        </div>
       </div>



        
    </div>
  )
}

export default HomePage