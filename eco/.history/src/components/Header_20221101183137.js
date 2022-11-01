import React from 'react'

const Header = () => {
  return (
    <header className='bg-black text-white fixed left-0 right-0 z-10 w-full  mx-auto transition-all duration-150 '>
    
  
    <div className='w-full flex flex-col justify-between'>
    <ul className='flex  justify-center items-center p'>
      <li><a className='text-2xl font-primary uppercase' href="/">Home</a></li>
      <li><a className='text-2xl font-primary uppercase' href="/">About</a></li>

    </ul>
   
    </div>
  
    </header>
  )
}

export default Header
