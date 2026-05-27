import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'

const menu = [
    {
        title:"Home",
        link:'/'
    },
    {
        title:"About",
        link:'/about'
    },
    {
        title:"Menu",
        link:'/menu'
    },
    {
        title:"Contact",
        link:'/contact'
    },
]
export default function Nav() {
  return (
    <ul className='flex gap-8 text-text'>
      {
        menu.map((item)=>{
            return <NavItem item={item}/>
        })
      }
    </ul>
  )
}
