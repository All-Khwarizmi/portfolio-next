import Link from 'next/link';
import React from 'react';
import { Inter, Montserrat, Open_Sans, Roboto } from '@next/font/google';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['cyrillic'], weight: ['100', '300', '400'] });

const Navbar = () => {
  return (
    <div className='h-16 fixed w-screen bg-red-800 flex justify-end  '>
      <ul
        className={clsx(
          montserrat.className,
          'flex items-center align-center pr-5 gap-5 justify-end'
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
    </div>
  );
};

export default Navbar;
