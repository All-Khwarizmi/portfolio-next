import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 bg-red-800'>
        <ul>
            <li>
            <Link href={"#"} >
                <p className=''>Home</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p className=''>About</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p className=''>Blog</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p className=''>Curriculum</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p className=''>Contact</p>
                </Link>    
            </li>
        </ul>

    </div>
  )
}

export default Navbar