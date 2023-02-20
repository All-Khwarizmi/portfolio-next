import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 bg-red-800'>
        <ul>
            <li>
            <Link href={"#"} >
                <p></p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p></p>
                </Link>    
            </li>
            <li>
            <Link href={"#"} >
                <p></p>
                </Link>    
            </li>
        </ul>

    </div>
  )
}

export default Navbar