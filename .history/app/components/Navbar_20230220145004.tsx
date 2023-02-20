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

function MobileNav({ open, setOpen }: any) {
  const bg = useColorModeValue('white', 'white');
  return (
    <nav
      className={`absolute top-0 left-0 h-screen w-screen transform bg-white ${
        open ? '-translate-x-0' : '-translate-x-full'
      } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
    >
      <div className='flex h-20  items-center justify-center bg-white drop-shadow-md filter'>
        {' '}
        {/*logo container*/}
        <Link className=' h-auto text-2xl font-semibold' href='/'>
          <div className='h-auto relative'>
            <Image
              className='w-44 hover:w-48'
              src='/IMG_0318.JPG'
              alt='Gîtes Mon Tresor Logo'
              width={500}
              height={500}
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
        </Link>
      </div>
      <div className='ml-4 flex flex-col items-center'>
        <Link
          className={clsx(
            montserrat.className,
            'my-4 text-xl font-bold uppercase'
          )}
          href='#section-1'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Accueil
        </Link>
        <Link
          className={clsx(
            montserrat.className,
            'my-4 text-xl font-bold uppercase'
          )}
          href='#welcome'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Gîtes
        </Link>
        <Link
          className={clsx(
            montserrat.className,
            'my-4 text-xl font-bold uppercase'
          )}
          href='#section-3'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Localisation
        </Link>
        <Link
          className={clsx(
            montserrat.className,
            'my-4 text-xl font-bold uppercase'
          )}
          href='#section-4'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Tarifs
        </Link>
        <Link
          className={clsx(
            montserrat.className,
            'my-4 text-xl font-bold uppercase'
          )}
          href='#section-5'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </Link>

        <Flex
          className='py-2'
          direction={['column', 'column', 'row']}
          w='full'
          px={6}
          align='center'
          bg={bg}
          justify='flex-end'
        >
          {' '}
          <HStack spacing={1}>
            {' '}
            <a
              rel='noreferrer'
              target={'_blank'}
              href='https://www.facebook.com/gitesmontresor/?locale=fr_FR'
            >
              <IconButton
                className='icon'
                aria-label='Facebook'
                icon={<SiFacebook />}
              ></IconButton>
            </a>{' '}
            <a
              rel='noreferrer'
              target={'_blank'}
              href='https://www.instagram.com/gitesmontresor/'
            >
              <IconButton
                className='icon'
                aria-label='Twitter'
                icon={<SiInstagram />}
              ></IconButton>
            </a>
            <a
              rel='noreferrer'
              target={'_blank'}
              href='https://www.google.com/maps/place/Les+G%C3%AEtes+Mon+Tr%C3%A9sor/@16.4645595,-61.4847141,17z/data=!3m1!4b1!4m6!3m5!1s0x8c133104d554b2bd:0x36ef5cfef0b588d1!8m2!3d16.4645544!4d-61.4825254!16s%2Fg%2F11s7tslv7h'
            >
              <IconButton
                className='icon'
                aria-label='Maps'
                icon={<SiGooglemaps />}
              ></IconButton>
            </a>
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
      <nav className='h-16 flex fixed w-screen drop-shadow-md bg-red-800  justify-end  '>
        <MobileNav open={open} setOpen={setOpen} />
        <ul
          className={clsx(
            openSans.className,
            'hidden lg:flex items-center align-center pr-5 gap-5 justify-end'
          )}
        >
          <li>
            <Link href={'#'}>
              <p className='uppercase '>Home</p>
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <p className='uppercase '>About</p>
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <p className='uppercase '>Blog</p>
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <p className='uppercase '>Curriculum</p>
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <p className='uppercase '>Contact</p>
            </Link>
          </li>
        </ul>
        <div
          className='relative z-50 flex h-8 w-8 flex-col items-center justify-between lg:hidden'
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? 'translate-y-3.5 rotate-45' : ''
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? '-translate-y-3.5 -rotate-45' : ''
            }`}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
