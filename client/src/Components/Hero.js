import React from 'react'

export const Hero = () => {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <div style={{ backgroundImage: "url(/res/div.svg)", backgroundPosition: "center" }} className='h-[1000px]' >
        <div className='p-5'>
          <div className="text-white text-[72px] font-normal font-['Manrope'] capitalize ml-[125px] mt-[300px]">Welcome To Commenta !</div>
          <div className="text-white text-[36px] font-normal font-['Manrope'] capitalize ml-[500px] mt-[20px]"> -- Wecome To the World of Commentry -- </div>
          <div className="text-white text-[18px] font-normal font-['Manrope'] capitalize ml-[500px] mt-[20px]">We are Doing great and bala</div>
          <div className='flex'> <a href="/"><div className=" ml-[500px] mt-[20px] box-border h-[58px] w-[250px] p-4 border-4 flex"><a className='text-white' href='/login'>Want to Comment</a>
            <img src="/res/arrow.svg" className='w-[45px] h-[45px] mb-9' alt="" />
          </div></a>
            <a href="" className='text-white ml-[50px] mt-[40px]' >Explore Comments</a></div>

        </div>
        <div className='bg-black'>
          <center>
            <div className='font-["Space Grotesk"] m-[300px] text-white text-[38px] bg-black'>Swipe For More
              <p className='font-["Space Grotesk"]  text-white text-[38px] text-bold bg-black' ><img src="/res/swipe.svg" alt="" /></p>
            </div>

          </center>
        </div>
      </div>


    </div>
  )
}
