import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className='w-full max-w-[200px] aspect-video relative'>
      <Image fill="true" className='w-full h-full object-contain' src="/logo.png"  alt="angela's food logo"/>
    </div>
  )
}
