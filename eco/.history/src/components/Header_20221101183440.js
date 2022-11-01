import React from 'react'

const Header = () => {
  return (
    <header className='bg-black text-white fixed left-0 right-0 z-10 w-full  mx-auto transition-all duration-150 '>
    <div className='flex justify-center '>
    <h1>ECOmmerce</h1>
    </div>
    <div className='w-full flex flex-col justify-between px-[40px] py-[30px] '>
    <ul className='flex  justify-center items-center'>
      <li><a className='text-2xl font-primary uppercase ml-[30px]' href="/">Home</a></li>
      <li><a className='text-2xl font-primary uppercase ml-[30px]' href="/">About</a></li>
      <li><a className='text-2xl font-primary uppercase ml-[30px]' href="/">Services</a></li>
    </ul>
   
    </div>
  
    </header>
  )
}

export default Header
