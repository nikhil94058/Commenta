import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <nav className='bg-black w-[160px] flex '>

        <div className='text-white font-[Roboto] text-[60px] ml-10'>Commenta</div>
        <div className='ml-[1000px] mt-5 flex'>

          <a href="/err" className='text-white font-[Roboto] text-[24px] w-max m-2'>home</a>
          <a href="/err" className='text-white font-[Roboto] text-[24px] m-2'>CaseStudies</a>
          <a href="/err" className='text-white font-[Roboto] text-[24px] m-2'>AboutUs</a>
          <a href="/err" className='text-white font-[Roboto] text-[24px] w-max m-2'>What we Do?</a>
          <a href="/err" className='text-white font-[Roboto] text-[24px] w-max m-2'>Contact Us</a>
        </div>





      </nav>
    </div>
  )
}
