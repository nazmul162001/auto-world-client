import { Button } from '@material-tailwind/react'
import React from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'

const Navbar = () => {
  return (
    <nav className='h-[58px] border-b-2 border-[#E6E6E6] w-full sticky'>
      <menu className='w-full bg-green h-full grid grid-cols-3'>
        <div className='flex items-center col-span-2'>
          <div className='w-full border-r-2 border-[#E6E6E6] mx-2 h-full'>
            <input
              class='bg-transparent h-full w-full pr-5 rounded-lg pl-8 text-sm focus:outline-none relative'
              type='search'
              name='search'
              placeholder='Search'
            />
            <span>
              <CiSearch className='absolute top-1/2 bottom-1/2 my-auto left-2 text-gray text-2xl' />
            </span>
          </div>
        </div>
        <div className='flex items-center'>
          <Button className='rounded-none bg-secondary text-primary capitalize px-16 mx-3 py-3'>
            Sell a Car
          </Button>
          <span className='p-2 bg-white'>
            <AiOutlineMenuFold className='text-2xl cursor-pointer' />
          </span>
        </div>
      </menu>
    </nav>
  )
}

export default Navbar
