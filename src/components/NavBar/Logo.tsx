import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/'}>
        <div className="m-5 ">
    <span className="font-oleoscript text-4xl text-white">Wonder<span className="text-lightblue" >SL</span></span>
</div>
    </Link>
  )
}

export default Logo