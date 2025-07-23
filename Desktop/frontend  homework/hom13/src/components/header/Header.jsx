import React from 'react'
import Logo from '../../assets/Logo.svg'

const Header = () => {
  return (
    <header className='bg-[#151719]'>
      <nav className='container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4'>
        <div className='h-20 flex items-center gap-10'>
          <img src={Logo} alt="Logo" />
        </div>
        <div className='gap-4 flex text-white mt-4 md:mt-0'>
          <button className='text-[#5D5DFF]'>Sign in</button>
          <button className='w-[96px] h-[40px] rounded-b-l bg-[#5D5DFF]'>Sign up</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
