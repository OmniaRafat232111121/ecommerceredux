import React from 'react'

const Header = () => {
  return (
    <header className='bg-black text-white fixed left-0 right-0 z-10 w-full  mx-auto transition-all duration-150 '>
    <div className='flex justify-between items-center h-[70px] pl-[50px] pr-[60px]'>
    <h1 className='font-bold'>Ecommerce</h1>
    </div>
    <div className='flex  justify-center items-center z-10 p'>
    <ul className='flex justify-between'>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    </ul>
    </div>
    </header>
  )
}

export default Header
