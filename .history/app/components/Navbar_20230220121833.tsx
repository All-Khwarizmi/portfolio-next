import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 bg-red-800'>
        <ul>
            <li>
            <Link href={"#"} >
                <p>Home</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p>About</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p>Blog</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p>Curriculum</p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p>Contact</p>
                </Link>    
            </li>
        </ul>

    </div>
  )
}

export default Navbar