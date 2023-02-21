
import { BsGithub, } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';
import { Flex, Heading, Text, HStack, IconButton } from '@chakra-ui/react';
import { SiFacebook, SiGooglemaps, SiInstagram } from 'react-icons/si';

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
            <Link href='https://github.com/All-Khwarizmi'>
              <BsGithub />
            </Link>
          </div>
          <div className='hover:'>
            <Link target={"_blank"} n href='https://www.linkedin.com/in/jason-suarez/'>
              <ImLinkedin />
            </Link>
          </div>
          <div className='hover:'>
            <Link href=''>
              <MdEmail />
            </Link>
          </div>

          <div className='hover:'>
            <Link href=''>
              <FaTwitterSquare />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact