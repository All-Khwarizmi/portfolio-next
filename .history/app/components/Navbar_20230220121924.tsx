import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 bg-red-800'>
        <ul>
            <li>
            <Link href={"#"} >
                <p className='uppercase '>Home</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p className='uppercase '>About</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p className='uppercase '>Blog</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p className='uppercase '>Curriculum</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p className='uppercase '>Contact</p>
                </Link>    
            </li>
        </ul>

    </div>
  )
}

export default Navbar