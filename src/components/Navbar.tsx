import React from 'react';
import Link from '../../node_modules/next/link';
import CartIcon from './CartIcon';
import Menu from './Menu';
import UserLinks from "@/components/UserLinks";

const Navbar = (  ) => {
  return (
      <nav>
        <div className='hidden md:flex gap-4 text-red-500 p-4 justify-between border-b-2 border-b-red-500 uppercase lg:px-20 lx:px-40'>
          <div className='flex gap-4'>
            <Link href='/'>Homepage</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/'>Contact</Link>
          </div>
            <div>
              <Link href={'/'} className='text-xl md:font-bold'> MASSIMO </Link>
            </div>
            <div className='flex gap-4'>
              <UserLinks/>
              <Link href='/cart'><CartIcon/></Link>
            </div>      
        </div>
            <div className='md:hidden h-12 text-red-500 p-4  flex  items-center justify-between border-b-2 border-b-red-500 '>
              <Link href={'/'}>MASSIMO</Link>
              <div>
                <Menu/>
              </div>
          </div>
      </nav>
  )
}

export default Navbar;