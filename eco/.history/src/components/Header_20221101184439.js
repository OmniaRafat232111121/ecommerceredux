import React from 'react'

const Header = () => {
  return (
    <header className='bg-black text-white fixed left-0 right-0 z-10 w-full  mx-auto transition-all duration-150 '>
    <div className='w-full flex  justify-between px-[40px] '>
    <div className='flex  justify-center items-center'>
    <h1 className='text-lg font-primary uppercase '>Ecommerce</h1>
    </div>
   
    
    <div className='w-full flex flex-col justify-between sm:w- items-center px-[40px] py-[30px] '>
    <ul className='flex  justify-center items-center'>
      <li><a className='text-md font-primary uppercase ml-[30px]' href="/">Home</a></li>
      <li><a className='text-md font-primary uppercase ml-[30px]' href="/">About</a></li>
      <li><a className='text-md font-primary uppercase ml-[30px]' href="/">Services</a></li>
    </ul>
   
    </div>
  </div>
    </header>
  )
}

export default Header
