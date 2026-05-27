import React from 'react'
import Logo from '../Logo'
import Nav from './Nav'
import PrimaryButton from '../Buttons/PrimaryButton'

export default function Header() {
  return (
    <header className='bg-primary'>
        <div className="container flex justify-between items-center">
            <Logo/>
            <Nav/>
            <PrimaryButton href={"/menu"} >Order Now</PrimaryButton>

        </div>
    </header>
  )
}
