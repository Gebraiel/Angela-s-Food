"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavItem({item}) {
  const pathname =  usePathname();
  console.log(pathname)
  return (
    <li key={item.title} className={`${pathname === item.title ? "text-secondary" : "text-text" }`}><Link href={item.link}>{item.title}</Link></li>
  )
}
