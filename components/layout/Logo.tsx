import Link from 'next/link'
import React from 'react'

const Logo = ({ path = "/"}: { path?: string }) => {
  return (
    <Link href={path}>
        <span className='sm:text-3xl text-2xl font-bold'>Ghee.</span>
    </Link>
  )
}

export default Logo