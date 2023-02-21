import React from 'react'
import { BsGithub, } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id='contact' className='h-screen contact'>
      <div className='flex h-full flex-col gap-5 items-center justify-center '>
        <div className='text-center'>
          <h1 className='text-5xl font-bold'>Let's work together...</h1>
          <h3 className='text-3xl italic pt-2'>How do you take your coffee?</h3>
        </div>
        <div className='flex justify-center text-3xl gap-5'>
          <div className='hover:'>
            <Link href="">
            <BsGithub />
            </Link>
          </div>
          <div className='hover:'>
            <Link href="">
            <ImLinkedin />
            </Link>
          </div>
          <div className='hover:'>
            <Link> href=""
            </Link>
          </div>
            <MdEmail />
          <div className='hover:'>
            <Link href="">
            <FaTwitterSquare />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact