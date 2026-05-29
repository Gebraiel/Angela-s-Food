import Link from 'next/link'
import React from 'react'

export default function OutlineButton({children,href,fill,className=""}) {
  return (
    <Link href={href} style={{color:`${fill ? fill : 'var(--color-primary'}`}} className={`bg-transparent border border-text  md:px-8 md:py-3 py-2 px-4 text-sm rounded-full w-fit ${className}`}>{children}</Link>
  )
}
