import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'
import OutlineButton from '../Buttons/OutlineButton'

const menu = [
    {
        title:"الرئيسية",
        link:'/'
    },
    {
        title:"مين احنا",
        link:'/about'
    },
    {
        title:"المنيو",
        link:'/menu'
    },
    {
        title:"كلمنا",
        link:'/contact'
    },
]
export default function Nav() {
  return (
    <ul className='flex md:flex-row md:gap-8 md:h-auto md:w-fit md:max-w-full md:relative px-4  py-4 absolute top-full right-0 bg-primary  max-h-96 w-full  max-w-[375px] flex-col  justify-center '>
      {
        menu.map((item)=>{
            return <NavItem key={item.title} item={item}/>
        })
      }
    <OutlineButton fill="white" href={"/menu"} className="mt-4 md:hidden block">أطلب دلوقتي</OutlineButton>

    </ul>
  )
}
