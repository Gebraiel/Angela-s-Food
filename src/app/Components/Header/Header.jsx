import React from 'react'
import Logo from '../Logo'
import Nav from './Nav'
import PrimaryButton from '../Buttons/PrimaryButton'
import { CiMenuBurger } from 'react-icons/ci'

export default function Header() {
  return (
    <header className='bg-primary py-4 relative border-b border-secondary'>
        <div className="container flex justify-between items-center ">
            <Logo/>
            <Nav/>
            <div>
                  <div className='md:block hidden'>
                      <PrimaryButton href={"/menu"} >أطلب الان</PrimaryButton>
                  </div>
                  <div className='block md:hidden'>
                    <button ><CiMenuBurger fill="#FAC742" /></button>
                  </div>
            </div>

        </div>
    </header>
  )
}
