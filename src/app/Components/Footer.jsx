import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { FaFacebookF ,FaInstagram ,FaWhatsapp } from "react-icons/fa";


export default function Footer() {
    const year = new Date().getFullYear();
    return (
    <footer className='bg-primary py-5'>
        <div className='container'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 justify-center items-center'>
                <div className='flex justify-center'>
                    <Logo />
                </div>
                <div className='text-center'>
                    <span className='text-white'>تابعنا علي  </span>
                    <ul className='flex justify-center gap-2 mt-2 text-white'>
                        <li className='aspect-square bg-white text-primary p-2 rounded-full'><Link target='_blank' href="https://facebook.com/angelasfood1"><FaFacebookF/></Link></li>
                        <li className='aspect-square bg-white text-primary p-2 rounded-full'><Link target='_blank' href="https://www.instagram.com/angelas.food/"><FaInstagram/></Link></li>
                        <li className='aspect-square bg-white text-primary p-2 rounded-full'><Link target='_blank' href="https://wa.me/+201036361345"><FaWhatsapp/></Link></li>
                    </ul>
                </div>
                <div className='text-center'>
                    <p className='text-white'>@{year} جميع الحقوق محفوظه لدي Angela's Food</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
