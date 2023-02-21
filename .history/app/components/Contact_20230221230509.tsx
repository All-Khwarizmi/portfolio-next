import React from 'react'
import { BsGithub, } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaTwitterSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className='h-screen contact'>
      <div className='flex ite'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold'>Let's work together...</h1>
          <h3>How do you take your coffee?</h3>
        </div>
        <div className='flex justify-center gap-5'>
            <div>
                <BsGithub />
            </div>
            <div>
                <ImLinkedin />
            </div>
            <div>
                <MdEmail />
            </div>
            <div>
                <FaTwitterSquare/>
            </div>
            
        </div>
      </div>
    </section>
  );
}

export default Contact