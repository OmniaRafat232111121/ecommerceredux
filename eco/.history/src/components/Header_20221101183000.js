import React from 'react'

const Header = () => {
  return (
    <header className='bg-black text-white fixed left-0 right-0 z-10 w-full  mx-auto transition-all duration-150 '>
    <div className='flex justify-between items-center h-[70px] pl-[50px] pr-[60px]'>
    <h1 className='font-bold'>Ecommerce</h1>
    </div>
  
    <div className='w-full flex flex-col justify-between'>
    <ul className='flex flex-col justify-center items-center'>
  
    
      <li key={index}>
      <a className='text-2xl font-primary uppercase' href={item.href}>
        {item.name}
      </a>
    </li>
    )
   })
   }
    </ul>
   
    </div>
  
    </header>
  )
}

export default Header
