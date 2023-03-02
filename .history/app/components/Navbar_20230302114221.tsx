'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Inter, Montserrat, Open_Sans, Roboto } from '@next/font/google';
import { clsx } from 'clsx';
import { Flex, HStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { SiFacebook, SiGooglemaps, SiInstagram } from 'react-icons/si';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['cyrillic'], weight: ['100', '300', '400'] });
import Image from 'next/image';
import { FaTwitterSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

function MobileNav({ open, setOpen }: any) {
  const bg = useColorModeValue('white', 'white');
  return (
    <nav
      className={`absolute top-0 left-0 text-black landing text-white h-screen w-screen transform  ${
        open ? '-translate-x-0' : '-translate-x-full'
      } drop-shadow-md filter overflow-y-scroll transition-transform duration-300 ease-in-out `}
    >
      <div className='flex h-20  items-center justify-center bg-red-800 drop-shadow-md filter'>
        {' '}
        {/*logo container*/}
      </div>
      <div className='ml-4  flex flex-col items-center'>
        <a
          className={clsx(
            montserrat.className,
            'my-4 text-xl  font-bold uppercase'
          )}
          href='#landing'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </a>
        <a
          className={clsx(
            montserrat.className,
            'my-4 text-xl font-bold uppercase'
          )}
          href='#projects'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Projects
        </a>
        <a
          className={clsx(
            montserrat.className,
            'my-4 text-xl font-bold uppercase'
          )}
          href='#timeline'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Timeline
        </a>
        <a
          className={clsx(
            montserrat.className,
            'my-4 text-xl font-bold uppercase'
          )}
          href='#contact'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
        <a
          className={clsx(
            montserrat.className,
            'my-4 text-xl font-bold hidden uppercase'
          )}
          href='#blog'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Blog
        </a>

        <Flex
          className='py-2 text-red-70 bg-inherit text-2xl'
          direction={['column', 'column', 'row']}
          w='full'
          px={6}
          align='center'
          justify='flex-end'
        >
          {' '}
          <HStack spacing={10}>
            <div className='hover:transform transition duration-500 hover:scale-125'>
              <Link href='https://github.com/All-Khwarizmi'>
                <BsGithub />
              </Link>
            </div>
            <div className='hover:transform transition duration-500 hover:scale-125'>
              <Link
                target={'_blank'}
                href='https://www.linkedin.com/in/jason-suarez/'
              >
                <ImLinkedin />
              </Link>
            </div>
            <div className='hover:transform transition duration-500 hover:scale-125 hidden'>
              <Link href=''>
                <MdEmail />
              </Link>
            </div>

            <div className='hover:hover:transform transition duration-500 hover:scale-125'>
              <Link href='https://twitter.com/swarecito'>
                <FaTwitterSquare className='' />
              </Link>
            </div>
          </HStack>
        </Flex>
      </div>
    </nav>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className='h-16 z-100 flex fixed w-screen drop-shadow-md bg-red-800  justify-end  '>
        <MobileNav open={open} setOpen={setOpen} />
        <ul
          className={clsx(
            openSans.className,
            'hidden lg:flex items-center align-center pr-5 gap-5 justify-end'
          )}
        >
          <li>
            <a href={'#landing'}>
              <p className='uppercase '>Home</p>
            </a>
          </li>
          <li>
           
            <a href='#projects'>
              <p className='uppercase '>projects</p>
            </a>
          </li>
          <li>
            <a href={'#timeline'}>
              <p className='uppercase '>Timeline</p>
            </a>
          </li>
          <li>
            <a href={'#contact'}>
              <p className='uppercase '>Contact</p>
            </a>
          </li>
          <li className='hidden'>
            <a href={'#blog'}>
              <p className='uppercase '>Blog</p>
            </a>
          </li>
        </ul>
        <div className='h-full flex items-center px-4'>
          <div
            className='relative z-50 flex h-6 w-8 flex-col items-center align-center justify-between lg:hidden'
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
                open ? 'translate-y-3 rotate-45' : ''
              }`}
            />
            <span
              className={`h-1 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
                open ? 'hidden' : ''
              }`}
            />
            <span
              className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
