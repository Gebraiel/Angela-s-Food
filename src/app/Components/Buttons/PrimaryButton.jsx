import Link from 'next/link'
import React from 'react'

export default function PrimaryButton({children,href}) {
  return (
    <Link href={href} className='bg-secondary px-5 py-2.5 text-primary rounded-full text-sm'>{children}</Link>
  )
}
