"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavItem({item}) {
  const pathname =  usePathname();
  console.log(pathname ,)
  return (
    <li key={item.title} className={` text-sm ${pathname === item.link ? "text-secondary font-bold" : "text-text" } md:border-0 md:py-0 border-b py-2 `}><Link href={item.link}>{item.title}</Link></li>
  )
}
